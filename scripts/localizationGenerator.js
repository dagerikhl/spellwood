#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { serialize } = require("valve-kv");

const localizationInfo = require("../game/resource/localization/localization").default;
const { Language } = require("../game/resource/localization/Language");

const ADDON_FILEPATH = path.resolve(__dirname, "..", "game", "resource", "addon_");
const FILEPATH_FORMAT = ".txt";

// Helper functions
const transformForLocalization = (text, modifier) => {
  if (modifier) {
    text = text.replace(/\{([^f]\w+)\}($|[^%])/g, "%d$1%$2");
    text = text.replace(/\{([^f]\w+)\}%/g, "%d$1%%%");
    text = text.replace(/\{f(\w+)\}($|[^%])/g, "%f$1%$2");
    text = text.replace(/\{f(\w+)\}%/g, "%f$1%%%");
    text = text.replace(/%\{([^f]\w+)\}/g, "%%%d$1%");
    text = text.replace(/%\{f(\w+)\}/g, "%%%f$1%");

    return text;
  } else {
    text = text.replace(/\{(\w*)}($|[^%])/g, "%$1%$2");
    text = text.replace(/\{(\w*)}%/g, "%$1%%%");
    text = text.replace(/%\{(\w*)}/g, "%%%$1%");

    return text;
  }
};

const generateContentStringForLanguage = (language, localizedData) => {
  let tokens = {};

  // Go over standard tooltips
  if (localizedData.StandardArray) {
    for (const standardLocalization of localizedData.StandardArray) {
      // Check for name override for the language we're checking
      let standardTooltipString = standardLocalization.name;

      if (standardLocalization.language_overrides && standardLocalization.language_overrides.length > 0) {
        for (const language_override of standardLocalization.language_overrides) {
          if (language_override.language === language) {
            standardTooltipString = language_override.name_override;
          }
        }
      }

      tokens[standardLocalization.classname] = standardTooltipString;
    }
  }

  // Go over abilities for this language
  if (localizedData.AbilityArray) {
    for (const ability of localizedData.AbilityArray) {
      // Class name is identical for all languages, so we would always use it
      const abilityString = `DOTA_Tooltip_Ability_${ability.ability_classname}`;

      // Name
      let abilityName = ability.name;
      let abilityDescription = ability.description;
      let abilityLore = ability.lore;
      let abilityNotes = ability.notes;
      let scepterDescription = ability.scepter_description;
      let shardDescription = ability.shard_description;
      let abilitySpecials = ability.ability_specials;

      if (ability.language_overrides) {
        for (const languageOverride of ability.language_overrides) {
          if (languageOverride.language === language) {
            // Check for name override
            if (languageOverride.name_override) {
              abilityName = languageOverride.name_override;
            }

            // Check for description overrides
            if (languageOverride.description_override) {
              abilityDescription = languageOverride.description_override;
            }

            // Check for lore override
            if (languageOverride.lore_override) {
              abilityLore = languageOverride.lore_override;
            }

            // Check for note override
            if (languageOverride.notes_override) {
              abilityNotes = languageOverride.notes_override;
            }

            // Check for scepter override
            if (languageOverride.scepter_description_override) {
              scepterDescription = languageOverride.scepter_description_override;
            }

            // Check for shard override
            if (languageOverride.shard_description_override) {
              shardDescription = languageOverride.shard_description_override;
            }

            // Check for ability specials override, if any
            if (languageOverride.ability_specials_override) {
              abilitySpecials = languageOverride.ability_specials_override;
            }
          }
        }
      }

      // Add name localization
      if (abilityName) {
        tokens[abilityString] = abilityName;
      }

      // Add description localization
      if (abilityDescription) {
        abilityDescription = transformForLocalization(abilityDescription, false);
        tokens[`${abilityString}_description`] = abilityDescription;
      }

      // Lore, if any
      if (abilityLore) {
        tokens[`${abilityString}_Lore`] = transformForLocalization(abilityLore, false);
      }

      // Notes, if any
      if (abilityNotes) {
        let counter = 0;
        for (const note of abilityNotes) {
          tokens[`${abilityString}_Note${counter}`] = transformForLocalization(note, false);

          counter++;
        }
      }

      // Scepter, if any
      if (scepterDescription) {
        tokens[`${abilityString}_scepter_description`] = transformForLocalization(scepterDescription, false);
      }

      // Shard, if any
      if (shardDescription) {
        tokens[`${abilityString}_shard_description`] = transformForLocalization(shardDescription, false);
      }

      // Ability specials, if any
      if (abilitySpecials) {
        for (const abilitySpecial of abilitySpecials) {
          // Construct the ability special
          let abilitySpecialText = "";

          if (abilitySpecial.percentage) {
            abilitySpecialText = "%";
          } else if (abilitySpecial.item_stat) {
            abilitySpecialText = "+$";
          }

          abilitySpecialText += abilitySpecial.text;

          tokens[`${abilityString}_${abilitySpecial.ability_special}`] = abilitySpecialText;
        }
      }
    }
  }

  // Go over modifiers
  if (localizedData.ModifierArray) {
    for (const modifier of localizedData.ModifierArray) {
      const modifierString = `DOTA_Tooltip_${modifier.modifier_classname}`;

      // Name
      let modifierName = modifier.name;
      let modifierDescription = modifier.description;

      if (modifier.language_overrides) {
        for (const languageOverride of modifier.language_overrides) {
          if (languageOverride.language === language) {
            // Name overrides for a specific language, if necessary
            if (languageOverride.name_override) {
              modifierName = languageOverride.name_override;
            }

            // Description overrides for a specific language, if necessary
            if (languageOverride.description_override) {
              modifierDescription = languageOverride.description_override;
            }
          }
        }
      }

      // Add name to localization string
      if (modifierName) {
        tokens[modifierString] = modifierName;
      }

      // Add description to localization string
      if (modifierDescription) {
        modifierDescription = transformForLocalization(modifierDescription, true);
        tokens[`${modifierString}_description`] = modifierDescription;
      }
    }
  }

  return tokens;
};

const writeContentToAddonFile = (language, tokens) => {
  // Set based on language
  const filepath = `${ADDON_FILEPATH}${language}${FILEPATH_FORMAT}`;

  // Remove file contents, or create a fresh one if it doesn't exists yet.
  const fd = fs.openSync(filepath, "w");
  fs.closeSync(fd);

  // Add the opening tokens
  const kv = { lang: { Language: language, Tokens: tokens } };

  // Serialize!
  let writeString = serialize(kv);

  // Write to the file
  fs.writeFileSync(filepath, writeString);

  console.log(`Finished writing tooltips for language ${language} in file ${filepath}.`);
};

const main = () => {
  // Generate information for every language
  const languages = Object.values(Language).filter((language) => typeof language !== "number");
  for (const language of languages) {
    if (language === Language.None) {
      continue;
    }

    const tokens = generateContentStringForLanguage(language, localizationInfo);
    writeContentToAddonFile(language, tokens);
  }
};

main();
