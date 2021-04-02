#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { deserialize, serialize } = require("valve-kv");

const commandLineArgs = process.argv.slice(2);

const type = commandLineArgs[0];

const main = async (type) => {
  switch (type) {
    case "kv-js":
      const kvInput = fs.readFileSync(path.resolve(__dirname, "kvInput.kv"), "utf8");

      const jsOutput = deserialize(kvInput);

      fs.writeFileSync(
        path.resolve(__dirname, "kvOutput.js"),
        `module.exports = ${JSON.stringify(jsOutput, undefined, 2)}`,
      );

      break;
    case "js-kv":
      const jsInput = require(path.resolve(__dirname, "jsInput.js"));

      const kvOutput = serialize(jsInput);

      fs.writeFileSync(path.resolve(__dirname, "jsOutput.kv"), kvOutput);

      break;
    default:
      throw new Error(`${type} must be one either "kv-js" or "js-kv".`);
  }
};

main(type).catch((error) => {
  console.error(error);

  process.exit(1);
});
