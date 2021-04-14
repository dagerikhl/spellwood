import { Language } from "../../Language";
import { StandardLocalization } from "../../LocalizationInterfaces";

export const warder: StandardLocalization[] = [
  {
    classname: "npc_dota_hero_antimage",
    name: "Warder",
    language_overrides: [
      {
        language: Language.Norwegian,
        name_override: "Runeskriver",
      },
    ],
  },
  {
    classname: "npc_dota_hero_antimage_npedesc1",
    // TODO Improve description
    name: "Etches ancient wards to augment his power or inscribe his surroundings with magic",
  },
];
