import {
  AbilityLocalization,
  LocalizationData,
  ModifierLocalization,
  StandardLocalization,
} from "~generator/localizationInterfaces";

// Note: Don't remove this, it's needed for the tooltip generator to work
import { Language } from "../languages";

// Note: All tooltips has to be in this file for the tooltip generator to work

// Standard tooltips

const addonStandardTooltips: StandardLocalization[] = [
  {
    classname: "addon_game_name",
    name: "Spellwood",
  },
];

const testerStandardTooltips: StandardLocalization[] = [
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

const warderStandardTooltips: StandardLocalization[] = [
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

const standardTooltips: StandardLocalization[] = [
  ...addonStandardTooltips,
  ...testerStandardTooltips,
  ...warderStandardTooltips,
];

// Ability tooltips

const heroAbilityTooltips: AbilityLocalization[] = [
  // TODO Remove example
  {
    ability_classname: "typescript_skywrath_mage_arcane_bolt",
    name: "Custom Arcane Bolt",
    description:
      "Custom version of Skywrath Mage's Arcane Bolt. Fires a tracking bolt at a target, doing {bolt_damage} + {int_multiplier}*Intelligence damage. Provides bonus vision around projectile.",
    lore: "Legend has it it was coded late one night fueled by red wine.",
    scepter_description: "I don't think it has any scepter effect.",
    shard_description: "I don't think it has any shard effect.",
    notes: ["My personal note."],
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
        notes_override: ["Mitt personlige notat."],
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
  },
];

const abilityTooltips: AbilityLocalization[] = [...heroAbilityTooltips];

// Modifier tooltips

const modifierTooltips: ModifierLocalization[] = [
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

export function GenerateLocalizationData(): LocalizationData {
  // This section can be safely ignored, as it is only logic
  //#region Localization logic
  // Arrays
  const standards: StandardLocalization[] = [];
  const abilities: AbilityLocalization[] = [];
  const modifiers: ModifierLocalization[] = [];

  // Create object of arrays
  const localizationData = { StandardArray: standards, AbilityArray: abilities, ModifierArray: modifiers };
  //#endregion

  // Enter localization data below!
  standards.push(...standardTooltips);
  abilities.push(...abilityTooltips);
  modifiers.push(...modifierTooltips);

  // Return data to compiler
  return localizationData;
}
