const npc_dota_hero_tester = {
  override_hero: "npc_dota_hero_axe",

  // General
  //-------------------------------------------------------------------------------------------------------------
  Model: "models/heroes/axe/axe.vmdl",
  SoundSet: "Hero_Axe",
  PickSound: "axe_axe_spawn_01",
  BanSound: "axe_axe_anger_01",
  Enabled: 1,
  HeroUnlockOrder: 2,
  HeroPool1: 1,
  HeroPool2: 1,
  Role: "Initiator,Durable,Disabler,Jungler,Carry",
  Rolelevels: "3,3,2,2,1",
  Complexity: 1,
  Team: "Bad",
  HeroID: 2,
  HeroOrderID: 2,
  BotImplemented: 1,
  ModelScale: 1.0,
  VersusScale: 0.89,
  LoadoutScale: 0.95,
  SpectatorLoadoutScale: 0.85,
  HeroGlowColor: "222 60 36",
  CMEnabled: 1,
  workshop_guide_name: "Tester",
  new_player_enable: 1,
  SimilarHeroes: "96,16,104",
  LastHitChallengeRival: "npc_dota_hero_juggernaut",
  HeroSelectSoundEffect: "Hero_Axe.Pick",
  GibType: "default",
  Ability1: "typescript_skywrath_mage_arcane_bolt",
  Ability2: "",
  Ability3: "",
  Ability4: "",
  Ability5: "",
  Ability6: "",
  Ability10: "",
  Ability11: "",
  Ability12: "",
  Ability13: "",
  Ability14: "",
  Ability15: "",
  Ability16: "",
  Ability17: "",
  ArmorPhysical: -1,
  AttackCapabilities: "DOTA_UNIT_CAP_MELEE_ATTACK",
  AttackDamageMin: 27,
  AttackDamageMax: 31,
  AttackRate: 1.7,
  AttackAnimationPoint: 0.5,
  AttackAcquisitionRange: 600,
  AttackRange: 150,
  AttackSpeedActivityModifiers: {
    fast: 170,
  },
  AttributePrimary: "DOTA_ATTRIBUTE_STRENGTH",
  AttributeBaseStrength: 25,
  AttributeStrengthGain: 3.4,
  AttributeBaseIntelligence: 18,
  AttributeIntelligenceGain: 1.6,
  AttributeBaseAgility: 20,
  AttributeAgilityGain: 2.2,
  StatusHealthRegen: 2.75,
  MovementSpeed: 310,
  MovementTurnRate: 0.6,
  MovementSpeedActivityModifiers: {
    jog: 0,
    run: 340,
  },
  BoundsHullName: "DOTA_HULL_SIZE_HERO",
  ItemSlots: {
    0: {
      SlotIndex: 0,
      SlotName: "weapon",
      SlotText: "#LoadoutSlot_Weapon",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 2500,
      MaxPolygonsLOD1: 1000,
    },
    1: {
      SlotIndex: 1,
      SlotName: "head",
      SlotText: "#LoadoutSlot_Head_Accessory",
      TextureWidth: 512,
      TextureHeight: 512,
      MaxPolygonsLOD0: 3000,
      MaxPolygonsLOD1: 1200,
    },
    2: {
      SlotIndex: 2,
      SlotName: "armor",
      SlotText: "#LoadoutSlot_Armor",
      TextureWidth: 512,
      TextureHeight: 512,
      MaxPolygonsLOD0: 2000,
      MaxPolygonsLOD1: 800,
    },
    3: {
      SlotIndex: 3,
      SlotName: "belt",
      SlotText: "#LoadoutSlot_Belt",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 1500,
      MaxPolygonsLOD1: 600,
    },
    4: {
      SlotIndex: 4,
      SlotName: "taunt",
      SlotText: "#LoadoutSlot_Taunt",
    },
    5: {
      SlotIndex: 5,
      SlotName: "misc",
      SlotText: "#LoadoutSlot_Misc",
      TextureWidth: 512,
      TextureHeight: 512,
      MaxPolygonsLOD0: 2000,
      MaxPolygonsLOD1: 800,
    },
    6: {
      SlotIndex: 6,
      SlotName: "summon",
      SlotText: "#LoadoutSlot_Pet",
      ShowItemOnGeneratedUnits: 1,
      GeneratesUnits: {
        0: "npc_dota_companion",
      },
    },
    7: {
      SlotIndex: 7,
      SlotName: "costume",
      SlotText: "#LoadoutSlot_Costume",
    },
  },
  particle_folder: "particles/units/heroes/hero_axe",
  GameSoundsFile: "soundevents/game_sounds_heroes/game_sounds_axe.vsndevts",
  VoiceFile: "soundevents/voscripts/game_sounds_vo_axe.vsndevts",
  RenderablePortrait: {
    Particles: {
      "particles/units/heroes/hero_axe/axe_loadout.vpcf": "loadout",
    },
  },
  Bot: {
    SupportsEasyMode: 1,
    Loadout: {
      item_tango: "ITEM_CONSUMABLE | ITEM_SELLABLE",
      item_flask: "ITEM_CONSUMABLE | ITEM_SELLABLE",
      item_branches: "ITEM_CORE | ITEM_SELLABLE",
      item_boots: "ITEM_CORE",
      item_wind_lace: "ITEM_CORE",
      item_ring_of_regen: "ITEM_CORE",
      item_recipe_tranquil_boots: "ITEM_DERIVED",
      item_tranquil_boots: "ITEM_DERIVED",
      item_blink: "ITEM_CORE",
      item_recipe_blade_mail: "ITEM_CORE",
      item_chainmail: "ITEM_CORE",
      item_broadsword: "ITEM_CORE",
      item_blade_mail: "ITEM_CORE | ITEM_DERIVED",
      item_mithril_hammer: "ITEM_LUXURY",
      item_ogre_axe: "ITEM_LUXURY",
      item_recipe_black_king_bar: "ITEM_LUXURY",
      item_black_king_bar: "ITEM_LUXURY | ITEM_DERIVED",
      //"item_ring_of_tarrasque": "ITEM_LUXURY"
      item_reaver: "ITEM_LUXURY",
      item_vitality_booster: "ITEM_LUXURY",
      item_recipe_heart: "ITEM_LUXURY",
      item_heart: "ITEM_DERIVED",
      item_platemail: "ITEM_LUXURY",
      item_mystic_staff: "ITEM_LUXURY",
      item_recipe_shivas_guard: "ITEM_LUXURY",
      item_shivas_guard: "ITEM_LUXURY | ITEM_DERIVED",
    },
    Build: {
      1: "axe_counter_helix",
      2: "axe_berserkers_call",
      3: "axe_counter_helix",
      4: "axe_berserkers_call",
      5: "axe_counter_helix",
      6: "axe_culling_blade",
      7: "axe_counter_helix",
      8: "axe_berserkers_call",
      9: "axe_berserkers_call",
      10: "special_bonus_attack_speed_25",
      11: "axe_battle_hunger",
      12: "axe_culling_blade",
      13: "axe_battle_hunger",
      14: "axe_battle_hunger",
      15: "special_bonus_hp_300",
      16: "axe_battle_hunger",
      17: "",
      18: "axe_culling_blade",
      19: "",
      20: "special_bonus_hp_regen_20",
      21: "",
      22: "",
      23: "",
      24: "",
      25: "special_bonus_unique_axe",
    },
    HeroType: "DOTA_BOT_TANK | DOTA_BOT_STUN_SUPPORT",
    LaningInfo: {
      SoloDesire: 1,
      RequiresBabysit: 0,
      ProvidesBabysit: 1,
      SurvivalRating: 2,
      RequiresFarm: 1,
      ProvidesSetup: 0,
      RequiresSetup: 1,
    },
  },
};

const npc_dota_hero_warder = {
  override_hero: "npc_dota_hero_antimage",

  // General
  //-------------------------------------------------------------------------------------------------------------
  Model: "models/heroes/antimage/antimage.vmdl",
  SoundSet: "Hero_Antimage",
  IdleExpression: "scenes/antimage/antimage_exp_idle_01.vcd",
  HeroID: 1,
  Enabled: 1,
  HeroUnlockOrder: 1,
  Role: "Carry,Escape,Nuker",
  Rolelevels: "3,3,1",
  Complexity: 1,
  Team: "Good",
  ModelScale: 0.9,
  VersusScale: 0.89,
  HeroGlowColor: "120 64 148",
  PickSound: "antimage_anti_spawn_01",
  BanSound: "antimage_anti_anger_04",
  CMEnabled: 1,
  NameAliases: "am",
  workshop_guide_name: "Warder",
  LastHitChallengeRival: "npc_dota_hero_bounty_hunter",
  HeroSelectSoundEffect: "Hero_Antimage.Pick",
  GibType: "default",
  new_player_enable: 1,
  SimilarHeroes: "109,12,94",
  Persona: {
    1: {
      name: "npc_dota_hero_antimage_persona1",
      Model: "models/heroes/antimage_female/antimage_female.vmdl", // For tools only
    },
  },
  HeroOrderID: 1,

  // Abilities
  //-------------------------------------------------------------------------------------------------------------
  Ability1: "",
  Ability2: "",
  Ability3: "",
  Ability4: "",
  Ability5: "",
  Ability6: "",
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
  ArmorPhysical: -1,

  // Attack
  //-------------------------------------------------------------------------------------------------------------
  AttackCapabilities: "DOTA_UNIT_CAP_MELEE_ATTACK",
  AttackDamageMin: 29,
  AttackDamageMax: 33,
  AttackRate: 1.4,
  AttackAnimationPoint: 0.3,
  AttackAcquisitionRange: 600,
  AttackRange: 150,
  ProjectileSpeed: 0,
  AttackSpeedActivityModifiers: {
    fast: 180,
    faster: 300,
  },

  // Attributes
  //-------------------------------------------------------------------------------------------------------------
  AttributePrimary: "DOTA_ATTRIBUTE_AGILITY",
  AttributeBaseStrength: 23,
  AttributeStrengthGain: 1.3,
  AttributeBaseIntelligence: 12,
  AttributeIntelligenceGain: 1.8,
  AttributeBaseAgility: 24,
  AttributeAgilityGain: 2.8,
  StatusHealthRegen: 0.25,

  // Movement
  //-------------------------------------------------------------------------------------------------------------
  MovementSpeed: 310,
  MovementTurnRate: 0.5,
  BoundsHullName: "DOTA_HULL_SIZE_HERO",
  particle_folder: "particles/units/heroes/hero_antimage",
  GameSoundsFile: "soundevents/game_sounds_heroes/game_sounds_antimage.vsndevts",
  VoiceFile: "soundevents/voscripts/game_sounds_vo_antimage.vsndevts",

  // Additional data needed to render the out of game portrait
  RenderablePortrait: {
    Particles: {
      "particles/units/heroes/hero_antimage/antimage_loadout.vpcf": "loadout",
    },
  },

  // Items
  //-------------------------------------------------------------------------------------------------------------
  ItemSlots: {
    0: {
      SlotIndex: 0,
      SlotName: "weapon",
      SlotText: "#LoadoutSlot_Weapon",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 2500,
      MaxPolygonsLOD1: 1000,
    },
    1: {
      SlotIndex: 1,
      SlotName: "offhand_weapon",
      SlotText: "#LoadoutSlot_Offhand_Weapon",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 2500,
      MaxPolygonsLOD1: 1000,
    },
    2: {
      SlotIndex: 2,
      SlotName: "head",
      SlotText: "#LoadoutSlot_Head_Accessory",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 3000,
      MaxPolygonsLOD1: 1200,
    },
    3: {
      SlotIndex: 3,
      SlotName: "armor",
      SlotText: "#LoadoutSlot_Armor",
      TextureWidth: 512,
      TextureHeight: 512,
      MaxPolygonsLOD0: 2500,
      MaxPolygonsLOD1: 1000,
    },
    4: {
      SlotIndex: 4,
      SlotName: "arms",
      SlotText: "#LoadoutSlot_Arms",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 1500,
      MaxPolygonsLOD1: 600,
    },
    5: {
      SlotIndex: 5,
      SlotName: "belt",
      SlotText: "#LoadoutSlot_Belt",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 1500,
      MaxPolygonsLOD1: 600,
    },
    6: {
      SlotIndex: 6,
      SlotName: "shoulder",
      SlotText: "#LoadoutSlot_Shoulder",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 2000,
      MaxPolygonsLOD1: 800,
    },
    7: {
      SlotIndex: 7,
      SlotName: "taunt",
      SlotText: "#LoadoutSlot_Taunt",
    },
    8: {
      SlotIndex: 8,
      SlotName: "weapon_persona_1",
      SlotText: "#LoadoutSlot_Weapon_Antimage_Persona",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 1000,
      MaxPolygonsLOD1: 500,
    },
    9: {
      SlotIndex: 9,
      SlotName: "offhand_weapon_persona_1",
      SlotText: "#LoadoutSlot_Offhand_Weapon_Antimage_Persona",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 1000,
      MaxPolygonsLOD1: 500,
    },
    10: {
      SlotIndex: 10,
      SlotName: "head_persona_1",
      SlotText: "#LoadoutSlot_Head_Antimage_Persona",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 1000,
      MaxPolygonsLOD1: 500,
    },
    11: {
      SlotIndex: 11,
      SlotName: "armor_persona_1",
      SlotText: "#LoadoutSlot_Armor_Antimage_Persona",
      TextureWidth: 256,
      TextureHeight: 256,
      MaxPolygonsLOD0: 1000,
      MaxPolygonsLOD1: 500,
    },
    12: {
      SlotIndex: 12,
      SlotName: "taunt_persona_1",
      SlotText: "#LoadoutSlot_Taunt_Antimage_Persona",
      DisplayInLoadout: 1,
    }, // NOTE: PERSONAL SELECTOR MUST BE LAST!
    13: {
      SlotIndex: 13,
      SlotName: "persona_selector",
      SlotText: "#LoadoutSlot_Persona_Selector",
    },
  },
  Bot: {
    HeroType: "DOTA_BOT_HARD_CARRY",
    LaningInfo: {
      SoloDesire: 1,
      RequiresBabysit: 2,
      ProvidesBabysit: 0,
      SurvivalRating: 2,
      RequiresFarm: 2,
      ProvidesSetup: 0,
      RequiresSetup: 1,
    },
  },
};

module.exports = {
  DOTAHeroes: {
    npc_dota_hero_tester,
    npc_dota_hero_warder,
  },
};
