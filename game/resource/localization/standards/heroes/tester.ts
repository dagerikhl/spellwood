import { Language } from "../../Language";
import { StandardLocalization } from "../../LocalizationInterfaces";

export const tester: StandardLocalization[] = [
  {
    classname: "npc_dota_hero_wisp",
    name: "TESTER",
    language_overrides: [
      {
        language: Language.Norwegian,
        name_override: "TESTER",
      },
    ],
  },
  {
    classname: "npc_dota_hero_wisp_npedesc1",
    name: "TESTER HERO FOR SPELLWOOD",
  },
];
