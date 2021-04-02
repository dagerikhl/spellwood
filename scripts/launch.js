const { spawn } = require("child_process");
const path = require("path");

const { getAddonName, getDotaPath } = require("./utils");

const commandLineArgs = process.argv.slice(2);

const addonName = getAddonName();

(async () => {
  const dotaPath = await getDotaPath();
  const win64 = path.join(dotaPath, "game", "bin", "win64");

  /*
   You can add any arguments here.
   E.g. `+dota_launch_custom_game ${getAddonName()} dota` would automatically load the "dota" map.
   You can also add command line args when running the script.
   E.g. `yarn launch -language norwegian` would launch the game with norwegian localization.
   */
  const args = [
    "-novid",
    "-tools",
    `-addon ${addonName}`,
    `+dota_launch_custom_game ${addonName} ${addonName}`,
    ...commandLineArgs,
  ];
  console.log(`Launching game with args \`${args.join(" ")}\``);
  spawn(path.join(win64, "dota2.exe"), args, { detached: true, cwd: win64 });
})().catch((error) => {
  console.error(error);

  process.exit(1);
});
