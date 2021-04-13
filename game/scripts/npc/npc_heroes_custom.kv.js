//===============================================================================================================
// HERO: TESTER
//===============================================================================================================
// TODO Customize this to a sensible tester hero
const npc_dota_hero_tester = {
  // Override
  //-------------------------------------------------------------------------------------------------------------
  override_hero: "npc_dota_hero_wisp",

  // General
  //-------------------------------------------------------------------------------------------------------------
  Model: "models/heroes/wisp/wisp.vmdl",
  ModelScale: 0.93,
  VersusScale: 0.77,
  Enabled: 1,
  Level: 1,
  BotImplemented: 0,
  Team: "Good",
  HeroID: 91,
  HeroOrderID: 83,
  NewHero: 0,
  HeroPool1: 0,
  HeroUnlockOrder: 1,
  CMEnabled: 0,
  CMTournamentIgnore: 0,
  new_player_enable: 0,
  Role: ["Support", "Escape", "Nuker"].join(),
  Rolelevels: [3, 2, 1].join(),
  Complexity: 3,
  workshop_guide_name: "TESTER",
  PickSound: "wisp_move03",
  BanSound: "wisp_shitty_crummy_wizard",
  SimilarHeroes: [50, 57, 111].join(),
  NameAliases: "wisp",
  NoCombine: 1,
  Legs: 0,
  LastHitChallengeRival: "npc_dota_hero_zuus",
  AbilityDraftDisabled: 0,
  AbilityDraftIgnoreCount: 8,
  GibType: "ethereal",
  GibTintColor: [171, 230, 255, 255].join(" "),

  // Abilities
  //-------------------------------------------------------------------------------------------------------------
  // Ability1: "wisp_tether",
  // Ability2: "wisp_spirits",
  // Ability3: "wisp_overcharge",
  // Ability4: "wisp_spirits_in",
  // Ability5: "wisp_spirits_out",
  // Ability6: "wisp_relocate",
  // Ability7: "wisp_tether_break",
  Ability1: "",
  Ability2: "",
  Ability3: "",
  Ability4: "",
  Ability5: "",
  Ability6: "",
  Ability7: "",

  // Talents, order: T1 left, T2 right, T2 left, T2 right, ...
  //-------------------------------------------------------------------------------------------------------------
  AbilityTalentStart: 10,

  // Ability10: "special_bonus_hp_regen_4",
  // Ability11: "special_bonus_attack_damage_35",
  // Ability12: "special_bonus_unique_wisp_3",
  // Ability13: "special_bonus_spell_lifesteal_10",
  // Ability14: "special_bonus_unique_wisp",
  // Ability15: "special_bonus_unique_wisp_6",
  // Ability16: "special_bonus_hp_700",
  // Ability17: "special_bonus_unique_wisp_4",
  Ability10: "",
  Ability11: "",
  Ability12: "",
  Ability13: "",
  Ability14: "",
  Ability15: "",
  Ability16: "",
  Ability17: "",

  // Armor
  //-------------------------------------------------------------------------------------------------------------
  ArmorPhysical: 100,
  MagicalResistance: 100,

  // Attack
  //-------------------------------------------------------------------------------------------------------------
  AttackDamageType: "DAMAGE_TYPE_ArmorPhysical",
  AttackCapabilities: "DOTA_UNIT_CAP_RANGED_ATTACK",
  AttackDamageMin: 300,
  AttackDamageMax: 600,
  BaseAttackSpeed: 100,
  AttackRate: 0.3,
  AttackAnimationPoint: 0.3,
  AttackAcquisitionRange: 800,
  AttackRange: 500,
  ProjectileModel: "particles/units/heroes/hero_wisp/wisp_base_attack.vpcf",
  ProjectileSpeed: 500,

  // Attributes
  //-------------------------------------------------------------------------------------------------------------
  AttributePrimary: "DOTA_ATTRIBUTE_STRENGTH",
  AttributeBaseStrength: 150,
  AttributeStrengthGain: 40.5,
  AttributeBaseAgility: 160,
  AttributeAgilityGain: 30.5,
  AttributeBaseIntelligence: 170,
  AttributeIntelligenceGain: 20.5,

  // Bounty
  //-------------------------------------------------------------------------------------------------------------
  BountyXP: 62,
  BountyGoldMin: 0,
  BountyGoldMax: 0,

  // Bounds
  //-------------------------------------------------------------------------------------------------------------
  BoundsHullName: "DOTA_HULL_SIZE_HERO",
  RingRadius: 70,

  // Movement
  //-------------------------------------------------------------------------------------------------------------
  MovementCapabilities: "DOTA_UNIT_CAP_MOVE_GROUND",
  MovementSpeed: 3200,
  MovementTurnRate: 0.7,
  HasAggressiveStance: 0,

  // Status
  //-------------------------------------------------------------------------------------------------------------
  StatusHealth: 200,
  StatusMana: 75,
  StatusManaRegen: 0,

  // Team
  //-------------------------------------------------------------------------------------------------------------
  TeamName: "DOTA_TEAM_GOODGUYS",
  CombatClassAttack: "DOTA_COMBAT_CLASS_ATTACK_HERO",
  CombatClassDefend: "DOTA_COMBAT_CLASS_DEFEND_HERO",
  UnitRelationshipClass: "DOTA_NPC_UNIT_RELATIONSHIP_TYPE_HERO",

  // Vision
  //-------------------------------------------------------------------------------------------------------------
  VisionDaytimeRange: 1800,
  VisionNighttimeRange: 800,

  // Inventory
  //-------------------------------------------------------------------------------------------------------------
  HasInventory: 1,

  // Sound
  //-------------------------------------------------------------------------------------------------------------
  SoundSet: "Hero_Wisp",
  VoiceBackgroundSound: "",
  HealthBarOffset: 200,
  IdleExpression: "scenes/default_idle.vcd",
  IdleSoundLoop: "Hero_Wisp.IdleLoop",
  HeroSelectSoundEffect: "Hero_Wisp.Pick",
  GameSoundsFile: "soundevents/game_sounds_heroes/game_sounds_wisp.vsndevts",
  VoiceFile: "soundevents/voscripts/game_sounds_vo_wisp.vsndevts",

  // Div
  //-------------------------------------------------------------------------------------------------------------
  ARDMDisabled: 0,
  HUD: {
    StatusHUD: {
      StatusStrength: {
        LocalizeToken: "#DOTA_StrengthStatus",
        Parameters: "Traits:Strength",
        HUDName: "unitstrength",
      },
      StatusAgility: {
        LocalizeToken: "#DOTA_AgilityStatus",
        Parameters: "Traits:Agility",
        HUDName: "unitagility",
      },
      StatusIntellect: {
        LocalizeToken: "#DOTA_IntellectStatus",
        Parameters: "Traits:Intellect",
        HUDName: "unitintellect",
      },
    },
  },
  particle_folder: "particles/units/heroes/hero_wisp",
  RenderablePortrait: {},
  precache: {
    model: "models/development/invisiblebox.vmdl",
  },
  ItemSlots: {
    0: {
      SlotIndex: 0,
      SlotName: "head",
      SlotText: "#LoadoutSlot_Head_Accessory",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 2300,
      MaxPolygonsLOD1: 2300,
    },
    1: {
      SlotIndex: 1,
      SlotName: "taunt",
      SlotText: "#LoadoutSlot_Taunt",
    },
    2: {
      SlotIndex: 2,
      SlotName: "ambient_effects",
      SlotText: "#LoadoutSlot_Ambient_Effects",
      DisplayInLoadout: 0,
    },
  },
  Bot: {
    HeroType: "DOTA_BOT_PURE_SUPPORT",
    LaningInfo: {
      SoloDesire: 0,
      RequiresBabysit: 0,
      ProvidesBabysit: 2,
      SurvivalRating: 2,
      RequiresFarm: 1,
      ProvidesSetup: 0,
      RequiresSetup: 2,
    },
  },
};

//===============================================================================================================
// HERO: WARDER
//===============================================================================================================
const npc_dota_hero_warder = {
  override_hero: "npc_dota_hero_antimage",

  // General
  //-------------------------------------------------------------------------------------------------------------
  // Model: "models/heroes/antimage/antimage.vmdl",
  // SoundSet: "Hero_Antimage",
  // IdleExpression: "scenes/antimage/antimage_exp_idle_01.vcd",
  // HeroID: 1,
  Enabled: 1,
  // HeroUnlockOrder: 1,
  // TODO Add more fitting roles
  Role: ["Carry"].join(),
  // Rolelevels: [3, 3, 1].join(),
  Complexity: 2,
  // Team: "Good",
  // ModelScale: 0.9,
  // VersusScale: 0.89,
  // HeroGlowColor: [120, 64, 148].join(" "),
  // PickSound: "antimage_anti_spawn_01",
  // BanSound: "antimage_anti_anger_04",
  // CMEnabled: 1,
  // NameAliases: "am",
  // workshop_guide_name: "Warder",
  // LastHitChallengeRival: "npc_dota_hero_bounty_hunter",
  // HeroSelectSoundEffect: "Hero_Antimage.Pick",
  // GibType: "default",
  // new_player_enable: 1,
  SimilarHeroes: "",
  // Persona: {
  //   1: {
  //     name: "npc_dota_hero_antimage_persona1",
  //     Model: "models/heroes/antimage_female/antimage_female.vmdl", // For tools only
  //   },
  // },
  // HeroOrderID: 1,

  // Abilities
  //-------------------------------------------------------------------------------------------------------------
  Ability1: "antimage_mana_break",
  Ability2: "antimage_blink",
  Ability3: "antimage_counterspell",
  Ability4: "antimage_mana_overload",
  Ability5: "generic_hidden",
  Ability6: "antimage_mana_void",

  // Talents, order: T1 left, T2 right, T2 left, T2 right, ...
  //-------------------------------------------------------------------------------------------------------------
  Ability10: "special_bonus_strength_9",
  Ability11: "special_bonus_attack_speed_15",
  Ability12: "special_bonus_unique_antimage_7",
  Ability13: "special_bonus_armor_8",
  Ability14: "special_bonus_unique_antimage_6",
  Ability15: "special_bonus_unique_antimage_8",
  Ability16: "special_bonus_unique_antimage_4",
  Ability17: "special_bonus_unique_antimage_2",

  // Armor
  //-------------------------------------------------------------------------------------------------------------
  // ArmorPhysical: -1,

  // Attack
  //-------------------------------------------------------------------------------------------------------------
  // AttackCapabilities: "DOTA_UNIT_CAP_MELEE_ATTACK",
  // AttackDamageMin: 29,
  // AttackDamageMax: 33,
  // AttackRate: 1.4,
  // AttackAnimationPoint: 0.3,
  // AttackAcquisitionRange: 600,
  // AttackRange: 150,
  // ProjectileSpeed: 0,
  // AttackSpeedActivityModifiers: {
  //   fast: 180,
  //   faster: 300,
  // },

  // Attributes
  //-------------------------------------------------------------------------------------------------------------
  // AttributePrimary: "DOTA_ATTRIBUTE_AGILITY",
  // AttributeBaseStrength: 23,
  // AttributeStrengthGain: 1.3,
  // AttributeBaseIntelligence: 12,
  // AttributeIntelligenceGain: 1.8,
  // AttributeBaseAgility: 24,
  // AttributeAgilityGain: 2.8,
  // StatusHealthRegen: 0.25,

  // Movement
  //-------------------------------------------------------------------------------------------------------------
  // MovementSpeed: 310,
  // MovementTurnRate: 0.5,
  // BoundsHullName: "DOTA_HULL_SIZE_HERO",
  // particle_folder: "particles/units/heroes/hero_antimage",
  // GameSoundsFile: "soundevents/game_sounds_heroes/game_sounds_antimage.vsndevts",
  // VoiceFile: "soundevents/voscripts/game_sounds_vo_antimage.vsndevts",

  // Additional data needed to render the out of game portrait
  // RenderablePortrait: {
  //   Particles: {
  //     "particles/units/heroes/hero_antimage/antimage_loadout.vpcf": "loadout",
  //   },
  // },

  // Items
  //-------------------------------------------------------------------------------------------------------------
  // ItemSlots: {
  //   0: {
  //     SlotIndex: 0,
  //     SlotName: "weapon",
  //     SlotText: "#LoadoutSlot_Weapon",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 2500,
  //     MaxPolygonsLOD1: 1000,
  //   },
  //   1: {
  //     SlotIndex: 1,
  //     SlotName: "offhand_weapon",
  //     SlotText: "#LoadoutSlot_Offhand_Weapon",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 2500,
  //     MaxPolygonsLOD1: 1000,
  //   },
  //   2: {
  //     SlotIndex: 2,
  //     SlotName: "head",
  //     SlotText: "#LoadoutSlot_Head_Accessory",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 3000,
  //     MaxPolygonsLOD1: 1200,
  //   },
  //   3: {
  //     SlotIndex: 3,
  //     SlotName: "armor",
  //     SlotText: "#LoadoutSlot_Armor",
  //     TextureWidth: 512,
  //     TextureHeight: 512,
  //     MaxPolygonsLOD0: 2500,
  //     MaxPolygonsLOD1: 1000,
  //   },
  //   4: {
  //     SlotIndex: 4,
  //     SlotName: "arms",
  //     SlotText: "#LoadoutSlot_Arms",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 1500,
  //     MaxPolygonsLOD1: 600,
  //   },
  //   5: {
  //     SlotIndex: 5,
  //     SlotName: "belt",
  //     SlotText: "#LoadoutSlot_Belt",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 1500,
  //     MaxPolygonsLOD1: 600,
  //   },
  //   6: {
  //     SlotIndex: 6,
  //     SlotName: "shoulder",
  //     SlotText: "#LoadoutSlot_Shoulder",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 2000,
  //     MaxPolygonsLOD1: 800,
  //   },
  //   7: {
  //     SlotIndex: 7,
  //     SlotName: "taunt",
  //     SlotText: "#LoadoutSlot_Taunt",
  //   },
  //   8: {
  //     SlotIndex: 8,
  //     SlotName: "weapon_persona_1",
  //     SlotText: "#LoadoutSlot_Weapon_Antimage_Persona",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 1000,
  //     MaxPolygonsLOD1: 500,
  //   },
  //   9: {
  //     SlotIndex: 9,
  //     SlotName: "offhand_weapon_persona_1",
  //     SlotText: "#LoadoutSlot_Offhand_Weapon_Antimage_Persona",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 1000,
  //     MaxPolygonsLOD1: 500,
  //   },
  //   10: {
  //     SlotIndex: 10,
  //     SlotName: "head_persona_1",
  //     SlotText: "#LoadoutSlot_Head_Antimage_Persona",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 1000,
  //     MaxPolygonsLOD1: 500,
  //   },
  //   11: {
  //     SlotIndex: 11,
  //     SlotName: "armor_persona_1",
  //     SlotText: "#LoadoutSlot_Armor_Antimage_Persona",
  //     TextureWidth: 256,
  //     TextureHeight: 256,
  //     MaxPolygonsLOD0: 1000,
  //     MaxPolygonsLOD1: 500,
  //   },
  //   12: {
  //     SlotIndex: 12,
  //     SlotName: "taunt_persona_1",
  //     SlotText: "#LoadoutSlot_Taunt_Antimage_Persona",
  //     DisplayInLoadout: 1,
  //   },
  //   // NOTE: PERSONAL SELECTOR MUST BE LAST!
  //   13: {
  //     SlotIndex: 13,
  //     SlotName: "persona_selector",
  //     SlotText: "#LoadoutSlot_Persona_Selector",
  //   },
  // },
  // Bot: {
  //   HeroType: "DOTA_BOT_HARD_CARRY",
  //   LaningInfo: {
  //     SoloDesire: 1,
  //     RequiresBabysit: 2,
  //     ProvidesBabysit: 0,
  //     SurvivalRating: 2,
  //     RequiresFarm: 2,
  //     ProvidesSetup: 0,
  //     RequiresSetup: 1,
  //   },
  // },
};

module.exports = {
  DOTAHeroes: {
    npc_dota_hero_tester,
    npc_dota_hero_warder,
  },
};
