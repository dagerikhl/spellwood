import { StandardLocalization } from "~generator/localizationInterfaces";

import { Language } from "../languages";

export const standardTooltips: StandardLocalization[] = [
  {
    classname: "npc_dota_hero_tester",
    name: "TESTER",
  },
  {
    classname: "npc_dota_hero_warder",
    name: "Warder",
  },
  // TODO Remove examples
  {
    classname: "Hello",
    name: "Hello world!",
    language_overrides: [
      {
        language: Language.Norwegian,
        name_override: "Hallo verden!",
      },
    ],
  },
  {
    classname: "watcher_test",
    name: "This should be automatically added",
    language_overrides: [
      {
        language: Language.Norwegian,
        name_override: "Dette burde bli automatisk lagt til",
      },
    ],
  },
];
