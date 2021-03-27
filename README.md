# ModDota template

## Changes to original template

- Use [Yarn](https://yarnpkg.com/) instead of NPM, it's way faster.

## Basic setup for app (if I'm so lucky that someone has forked my repo <3)

_Disclaimer: I'm writing this on Windows. If you're on another OS, pleace reach out to me at [dagerikhl@gmail.com](mailto:dagerikhl@gmail.com)._

For first steps, consult the [TypeScript DotA 2 template](https://github.com/ModDota/TypeScriptAddonTemplate)

Guide can be found here, at the [TypeScript introduction](https://moddota.com/scripting/Typescript/typescript-introduction)

After you've followed these steps, and you want to use my repo, clone my repo instead of ModDota's. Then continue with the following steps:

1. Clone this repo to your computer.
2. Move contents of `content` and `game` folder to `<disc>:\...\steamapps\common\dota 2 beta\<content|game>\dota_addons\<your app name>\<content|game>`.
3. Make symbolic hard links to your now moved folders in your git repo folder (where you cloned your repo) using command prompt (CMD) as an administrator (not 100 % sure about the administrator requirement):

```cmd
mklink /J content "<your path to your DotA 2 folder>\content\<your app name>"
mklink /J game "<your path to your DotA 2 folder>\game\<your app name>"
```

4. Open your repo in your favourite editor, and start coding!
   - I recommend IntelliJ for LUA coding.
     - Remember to istall some LUA plugin in IntelliJ, I use EmmyLua.
   - I recommend Sublime Text for Key-Value text files.
     - Remember to install plugins to work with DotA KV files, I use dota_kv.

## Original README from cloned repo

A template for Dota 2 Custom Games built with modern technologies. It includes

- [TypeScript for Panorama](https://moddota.com/panorama/introduction-to-panorama-ui-with-typescript)
- [TypeScript for VScripts](https://typescripttolua.github.io/)
- Simple commands to build and launch your custom game
- [Continuous Integration](#continuous-integration) support

## Getting Started

1. Clone this repository or, if you're planning to have a repository for your custom game on GitHub, [create a new repository from this template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) and clone it instead.
2. Open the directory of your custom game and change `name` field in `package.json` file to the name of your addon name.
3. Open terminal in that directory and run `npm install` to install dependencies. You also should run `npm update` once in a while to get tool updates.

After that you can press `Ctrl+Shift+B` in VSCode or run `yarn dev` command in terminal to compile your code and watch for changes.

## Continuous Integration

This template includes a [GitHub Actions](https://github.com/features/actions) [workflow](.github/workflows/ci.yml) that builds your custom game on every commit and fails when there are type errors.
