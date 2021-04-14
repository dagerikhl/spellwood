import { Language } from "../Language";
import { ModifierLocalization } from "../LocalizationInterfaces";

export const modifiers: ModifierLocalization[] = [
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
