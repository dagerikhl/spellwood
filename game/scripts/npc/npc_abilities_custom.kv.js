//=================================================================================================================
// Meepo: Earthbind
//=================================================================================================================
const meepo_earthbind_ts_example = {
  // General
  //-------------------------------------------------------------------------------------------------------------
  BaseClass: "ability_lua",
  ScriptFile: "abilities/heroes/meepo/earthbind_ts_example.lua",
  AbilityTextureName: "meepo_earthbind",
  AbilityBehavior: [
    "DOTA_ABILITY_BEHAVIOR_AOE",
    "DOTA_ABILITY_BEHAVIOR_POINT",
    "DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
  ].join(" | "),
  SpellImmunityType: "SPELL_IMMUNITY_ENEMIES_NO",
  SpellDispellableType: "SPELL_DISPELLABLE_YES",
  FightRecapLevel: 1,
  AbilitySound: "Hero_Meepo.Earthbind.Cast",

  // Casting
  //-------------------------------------------------------------------------------------------------------------
  AbilityCastRange: 1250,
  AbilityCastPoint: 0.3,

  // Time
  //-------------------------------------------------------------------------------------------------------------
  AbilityCooldown: 2,

  // Cost
  //-------------------------------------------------------------------------------------------------------------
  AbilityManaCost: 10,

  // Special
  //-------------------------------------------------------------------------------------------------------------
  AbilitySpecial: {
    "01": {
      var_type: "FIELD_FLOAT",
      duration: 2.0,
    },
    "02": {
      var_type: "FIELD_INTEGER",
      radius: 220,
    },
    "03": {
      var_type: "FIELD_INTEGER",
      speed: 857,
    },
    "04": {
      var_type: "FIELD_INTEGER",
      tooltip_range: 1250,
    },
    // Adding cooldown and praying this gets synced
    "05": {
      var_type: "FIELD_FLOAT",
      cooldown: 2,
      LinkedSpecialBonus: "special_bonus_unique_meepo3",
    },
  },
  AbilityCastAnimation: "ACT_DOTA_CAST_ABILITY_1",
};

//=================================================================================================================
// Skywrath Mage: Arcane Bolt
// TypeScript tutorial example of custom implementation of the original spell.
//=================================================================================================================
const typescript_skywrath_mage_arcane_bolt = {
  // General
  //-------------------------------------------------------------------------------------------------------------
  BaseClass: "ability_lua",
  AbilityTextureName: "skywrath_mage_arcane_bolt",
  ScriptFile: "abilities/heroes/skywrath_mage/typescript_skywrath_mage_arcane_bolt",
  AbilityBehavior: "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
  AbilityUnitTargetTeam: "DOTA_UNIT_TARGET_TEAM_ENEMY",
  AbilityUnitTargetType: ["DOTA_UNIT_TARGET_HERO", "DOTA_UNIT_TARGET_BASIC"].join(" | "),
  AbilityUnitDamageType: "DAMAGE_TYPE_MAGICAL",
  SpellImmunityType: "SPELL_IMMUNITY_ENEMIES_NO",
  FightRecapLevel: 1,
  AbilitySound: "Hero_SkywrathMage.ArcaneBolt.Cast",

  // Casting
  //-------------------------------------------------------------------------------------------------------------
  AbilityCastRange: 875,
  AbilityCastPoint: [0.1, 0.1, 0.1, 0.1].join(" "),

  // Time
  //-------------------------------------------------------------------------------------------------------------
  AbilityCooldown: [5, 4, 3, 2].join(" "),

  // Cost
  //-------------------------------------------------------------------------------------------------------------
  AbilityManaCost: 90,

  // Special
  //-------------------------------------------------------------------------------------------------------------
  AbilitySpecial: {
    "01": {
      var_type: "FIELD_INTEGER",
      bolt_speed: 500,
    },

    "02": {
      var_type: "FIELD_INTEGER",
      bolt_vision: 325,
    },

    "03": {
      var_type: "FIELD_FLOAT",
      bolt_damage: [60, 80, 100, 120].join(" "),
    },

    "04": {
      var_type: "FIELD_FLOAT",
      int_multiplier: 1.6,
      CalculateSpellDamageTooltip: 1,
    },

    "05": {
      var_type: "FIELD_FLOAT",
      vision_duration: 3.34,
    },
  },
  AbilityCastAnimation: "ACT_DOTA_CAST_ABILITY_1",
};

module.exports = {
  DOTAAbilities: {
    meepo_earthbind_ts_example,
    typescript_skywrath_mage_arcane_bolt,
  },
};
