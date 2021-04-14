import { Language } from "./Language";

export interface AbilityLocalization {
  ability_classname: string;
  name?: string;
  description?: string;
  scepter_description?: string;
  shard_description?: string;
  lore?: string;
  notes?: string[];
  ability_specials?: AbilitySpecialLocalization[];
  language_overrides?: AbilityLocalizationContent[];
}

export interface AbilityLocalizationContent {
  language: Language;
  name_override?: string;
  description_override?: string;
  scepter_description_override?: string;
  shard_description_override?: string;
  lore_override?: string;
  notes_override?: string[];
  ability_specials_override?: AbilitySpecialLocalization[];
}

export interface ModifierLocalization {
  modifier_classname: string;
  name?: string;
  description?: string;
  language_overrides?: ModifierLocalizationContent[];
}

export interface ModifierLocalizationContent {
  language: Language;
  name_override?: string;
  description_override?: string;
}

export interface StandardLocalization {
  classname: string;
  name: string;
  language_overrides?: StandardLocalizationNameOverride[];
}

export interface StandardLocalizationNameOverride {
  language: Language;
  name_override: string;
}

export interface AbilitySpecialLocalization {
  ability_special: string;
  text: string;
  percentage?: boolean; // false by default if omitted
  item_stat?: boolean; // false by default if omitted
}

export interface TalentLocalization {
  talent_classname: string;
  talents: HeroTalentLocalization[];
}

export interface HeroTalentLocalization {
  name: string;
  description: string;
  lore: string;
  language_overrides?: TalentLocalizationOverrides[];
}

export interface TalentLocalizationOverrides {
  language: Language;
  name_override?: string;
  description_override?: string;
  lore_override?: string;
}

export interface LocalizationData {
  AbilityArray?: AbilityLocalization[];
  ModifierArray?: ModifierLocalization[];
  StandardArray?: StandardLocalization[];
  TalentArray?: TalentLocalization[];
}
