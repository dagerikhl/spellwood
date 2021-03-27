import {
  AbilityLocalization,
  LocalizationData,
  ModifierLocalization,
  StandardLocalization,
} from "~generator/localizationInterfaces";
import { Language } from "../languages";

export function GenerateLocalizationData(): LocalizationData {
  // This section can be safely ignored, as it is only logic.
  //#region Localization logic
  // Arrays
  const Abilities: Array<AbilityLocalization> = new Array<AbilityLocalization>();
  const Modifiers: Array<ModifierLocalization> = new Array<ModifierLocalization>();
  const StandardTooltips: Array<StandardLocalization> = new Array<StandardLocalization>();

  // Create object of arrays
  const localization_info: LocalizationData = {
    AbilityArray: Abilities,
    ModifierArray: Modifiers,
    StandardArray: StandardTooltips,
  };
  //#endregion

  // Enter localization data below!

  // Abilities
  Abilities.push({
    ability_classname: "typescript_skywrath_mage_arcane_bolt",
    name: "Custom Arcane Bolt",
    description:
      "Custom version of Skywrath Mage's Arcane Bolt. Fires a tracking bolt at a target, doing {bolt_damage} + {int_multiplier}*Intelligence damage. Provides bonus vision around projectile.",
    lore: "Legend has it it was coded late one night fueled by red wine.",
    scepter_description: "I don't think it has any scepter effect.",
    shard_description: "I don't think it has any shard effect.",
    notes: ["My personal note"],
    ability_specials: [
      {
        ability_special: "bolt_damage",
        text: "DAMAGE",
      },
      {
        ability_special: "int_multiplier",
        text: "INTELLIGENCE MULTIPLIER",
      },
      {
        ability_special: "bolt_speed",
        text: "PROJECTILE SPEED",
      },
      {
        ability_special: "bolt_vision",
        text: "VISION RADIUS",
      },
      {
        ability_special: "vision_duration",
        text: "VISION DURATION",
      },
    ],
    language_overrides: [
      {
        language: Language.Norwegian,
        name_override: "Egenlagd Arkan Bolt",
        description_override:
          "Egenlagd versjon av Skywrath Mage's Arkan Bolt. Skyter ut en sporende bolt mot et mål, som gjør {bolt_damage} + {int_multiplier}*Intelligens skade. Gir ekstra lys rundt prosjektilet.",
        lore_override: "Det heter seg at denne ble kodet en sen kveld hjulpet av mye rødvin.",
        scepter_description_override: "Jeg tror ikke denne har noen septereffekt.",
        shard_description_override: "Jeg tror ikke denne har noen shardeffekt.",
        notes_override: ["Mitt personlige notat"],
        ability_specials_override: [
          {
            ability_special: "bolt_damage",
            text: "SKADE",
          },
          {
            ability_special: "int_multiplier",
            text: "INTELLIGENSFAKTOR",
          },
          {
            ability_special: "bolt_speed",
            text: "PROSJEKTILFART",
          },
          {
            ability_special: "bolt_vision",
            text: "LYSRADIUS",
          },
          {
            ability_special: "vision_duration",
            text: "LYSVARIGHET",
          },
        ],
      },
    ],
  });

  // Modifiers
  Modifiers.push({
    modifier_classname: "modifier_panic",
    name: "Panic",
    description: "This unit is panicked! Movespeed increased to 540.",
  });

  // Standard tooltips
  // TODO Remove test tooltips
  StandardTooltips.push({
    classname: "Hello",
    name: "test",
  });
  StandardTooltips.push({
    classname: "watcher_test",
    name: "This should be automatically added",
  });

  // Return data to compiler
  return localization_info;
}