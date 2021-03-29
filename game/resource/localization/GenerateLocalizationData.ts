import {
  AbilityLocalization,
  LocalizationData,
  ModifierLocalization,
  StandardLocalization,
} from "~generator/localizationInterfaces";

import { abilityTooltips } from "./abilityTooltips";
import { modifierTooltips } from "./modifierTooltips";
import { standardTooltips } from "./standardTooltips";

// Don't remove this, it's needed for the tooltip generator to work
// noinspection ES6UnusedImports
import { Language } from "../languages";

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
