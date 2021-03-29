#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { isKvObject, serialize } = require("valve-kv");

const commandLineArgs = process.argv.slice(2);

const findMatchingFiles = (targetDir, filter) => {
  if (!fs.existsSync(targetDir)) {
    throw new Error(`Target directory ${targetDir} not found.`);
  }

  const files = fs.readdirSync(targetDir);

  const matchingFiles = [];
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(targetDir, files[i]);
    const stat = fs.lstatSync(filename);

    if (stat.isDirectory()) {
      matchingFiles.push(...findMatchingFiles(filename, filter));
    } else if (filter.test(filename)) {
      matchingFiles.push({ filename: files[i], filePath: filename });
    }
  }

  return matchingFiles;
};

const transpileJsToKv = (filename, filePath) => {
  const file = require(filePath);

  if (!file) {
    throw new Error(`${filename} not found.`);
  }
  if (!isKvObject(file)) {
    throw new Error(`${filename} doesn't match a KV object structure.`);
  }

  return serialize(file);
};

const KV_FILE_REGEX = /\.kv\.js$/;

const main = async () => {
  const baseDir = commandLineArgs[0];

  const targetDir = path.resolve(process.cwd(), baseDir);

  const matchingFiles = findMatchingFiles(targetDir, KV_FILE_REGEX);

  for (const { filename, filePath } of matchingFiles) {
    const kvFilePath = filePath.replace(KV_FILE_REGEX, ".txt");
    const kvFileOutput = transpileJsToKv(filename, filePath);

    fs.writeFileSync(kvFilePath, kvFileOutput);
  }
};

main().catch((error) => {
  console.error(error);

  process.exit(1);
});
