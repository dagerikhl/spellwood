import { abilities } from "./abilities/abilities";
import { LocalizationData } from "./LocalizationInterfaces";
import { modifiers } from "./modifiers/modifiers";
import { standards } from "./standards/standards";

const localizationInfo: LocalizationData = {
  AbilityArray: abilities,
  ModifierArray: modifiers,
  StandardArray: standards,
};

// Don't remove, needed for scripts/localizationGenerator
export default localizationInfo;
