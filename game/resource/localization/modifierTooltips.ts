import { ModifierLocalization } from "~generator/localizationInterfaces";

import { Language } from "../languages";

export const modifierTooltips: ModifierLocalization[] = [
  // TODO Remove example
  {
    modifier_classname: "modifier_panic",
    name: "Panic",
    description: "This unit is panicked! Movespeed increased to 540.",
    language_overrides: [
      {
        language: Language.Norwegian,
        name_override: "Panikk",
        description_override: "Denne enheten har panikk! Bevegelseshastighet økt til 540.",
      },
    ],
  },
];
