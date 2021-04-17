# Spellwood [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

DotA 2 hero defence mod

## Changes to original template

- Use [Yarn](https://yarnpkg.com/) instead of NPM, it's way faster.

## Basic setup for app (if I'm so lucky that someone has forked my repo <3)

_Disclaimer: I'm writing this on Windows. If you're on another OS, pleace post an issue on [this repo's GitHub Issues page](https://github.com/dagerikhl/spellwood/issues)._

For first steps, consult the [TypeScript DotA 2 template](https://github.com/ModDota/TypeScriptAddonTemplate)

Guide can be found here, at the [TypeScript introduction](https://moddota.com/scripting/Typescript/typescript-introduction)

After you've followed these steps, and you want to use my repo, clone my repo instead of ModDota's. Then continue with the following steps:

1. Clone this repo to your computer.
   - Normally, you would make hard links to folders in your DotA 2 folder, but this repo comes with a postinstall script that fixes that for you!
2. Open your repo in your favourite editor, and start coding!
   - I recommend IntelliJ for LUA coding.
     - Remember to istall some LUA plugin in IntelliJ, I use EmmyLua.
   - I recommend Sublime Text for Key-Value text files.
     - Remember to install plugins to work with DotA KV files, I use dota_kv.

## Development

### Getting started

1. Run `yarn install`.
2. Run `yarn dev` to start watching files, building and transpiling necessary `.ts` and `.kv.js` files to `.lua`, `.js`, and `.txt` files.
3. Run `yarn launch` to start DotA 2 developer tools and launch the map.

### Commiting

This repo uses commitizen to commit conventional changelog valid commits. So to commit, _don't_ use `git commit`, use `yarn cm` or `git cz` instead.

## Release

To release a new version, run the `yarn release` script, which will create a new release and update the changelog with any new conventional changelog valid commits (see [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)),

## Contributors

- Spellwood author: [dagerikhl](https://github.com/dagerikhl)
- Template author: [ModDota](https://github.com/ModDota)

## Original README from template repo

Slight modifications have been made.

A template for Dota 2 Custom Games built with modern technologies. It includes

- [TypeScript for Panorama](https://moddota.com/panorama/introduction-to-panorama-ui-with-typescript)
- [TypeScript for VScripts](https://typescripttolua.github.io/)
- Simple commands to build and launch your custom game
- [Continuous Integration](#continuous-integration) support

## Getting Started

1. Clone this repository or, if you're planning to have a repository for your custom game on GitHub, [create a new repository from this template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) and clone it instead.
2. Open the directory of your custom game and change `name` field in `package.json` file to the name of your addon name.
3. Open terminal in that directory and run `yarn install` to install dependencies. You also should update your packages once in a while to get tool updates.

After that you can press `Ctrl+Shift+B` in VSCode or run `yarn dev` command in terminal to compile your code and watch for changes.

## Continuous Integration

This template includes a [GitHub Actions](https://github.com/features/actions) [workflow](.github/workflows/ci.yml) that builds your custom game on every commit and fails when there are type errors.
