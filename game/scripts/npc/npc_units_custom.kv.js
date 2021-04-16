const npc_dummy_unit = {
  // General
  //----------------------------------------------------------------
  BaseClass: "npc_dota_base_additive", // Class of entity of link to.
  Model: "models/development/invisiblebox.vmdl", // Model.
  SoundSet: "Creep_Good_Range", // Name of sound set.
  Level: 0,
  UnitLabel: "healing_ward",

  // Abilities
  //----------------------------------------------------------------

  Ability1: "dummy_unit", // Ability 1.
  Ability2: "", // Ability 2.
  Ability3: "", // Ability 3.
  Ability4: "", // Ability 4.
  Ability5: "", // Ability 5.
  Ability6: "", // Ability 6 - Extra.
  Ability7: "", // Ability 7 - Extra.
  Ability8: "", // Ability 8 - Extra.

  // Armor
  //----------------------------------------------------------------
  ArmorPhysical: 0, // Physical protection.
  MagicalResistance: 0, // Magical protection.

  // Attack
  //----------------------------------------------------------------
  AttackCapabilities: "DOTA_UNIT_CAP_NO_ATTACK", // Type of attack - melee, ranged, etc.
  AttackDamageMin: 0, // Damage range min.
  AttackDamageMax: 0, // Damage range max.
  AttackDamageType: "DAMAGE_TYPE_ArmorPhysical",
  AttackRate: 1, // Speed of attack.
  AttackAnimationPoint: 0.5, // Normalized time in animation cycle to attack.
  AttackAcquisitionRange: 800, // Range within a target can be acquired.
  AttackRange: 500, // Range within a target can be attacked.
  ProjectileModel: "", // Particle system model for projectile.
  ProjectileSpeed: 900, // Speed of projectile.

  // Attributes
  //----------------------------------------------------------------
  AttributePrimary: "DOTA_ATTRIBUTE_STRENGTH",
  AttributeBaseStrength: 0, // Base strength
  AttributeStrengthGain: 0, // Strength bonus per level.
  AttributeBaseIntelligence: 0, // Base intelligence
  AttributeIntelligenceGain: 0, // Intelligence bonus per level.
  AttributeBaseAgility: 0, // Base agility
  AttributeAgilityGain: 0, // Agility bonus per level.

  // Bounty
  //----------------------------------------------------------------
  BountyXP: 0, // Experience earn.
  BountyGoldMin: 0, // Gold earned min.
  BountyGoldMax: 0, // Gold earned max.

  // Bounds
  //----------------------------------------------------------------
  BoundsHullName: "DOTA_HULL_SIZE_SMALL", // Hull type used for navigation/locomotion.

  // Movement
  //----------------------------------------------------------------
  MovementCapabilities: "DOTA_UNIT_CAP_MOVE_GROUND", // Type of locomotion - ground, air
  MovementSpeed: 450, // Speed
  MovementTurnRate: 1.0, // Turning rate.
  FollowRange: 250, // Distance to keep when following

  // Status
  //----------------------------------------------------------------
  StatusHealth: 1, // Base health.
  StatusHealthRegen: 0, // Health regeneration rate.
  StatusMana: 0, // Base mana.
  StatusManaRegen: 0, // Mana regeneration rate.

  // Team
  //----------------------------------------------------------------
  TeamName: "DOTA_TEAM_GOODGUYS", // Team name.
  CombatClassAttack: "DOTA_COMBAT_CLASS_ATTACK_PIERCE",
  CombatClassDefend: "DOTA_COMBAT_CLASS_DEFEND_SOFT",
  UnitRelationshipClass: "DOTA_NPC_UNIT_RELATIONSHIP_TYPE_WARD",

  // Vision
  //----------------------------------------------------------------
  VisionDaytimeRange: 0, // Range of vision during day light.
  VisionNighttimeRange: 0, // Range of vision at night time.

  // Bots
  //----------------------------------------------------------------
  AttackDesire: 1.5, // How much bots want to attack them vs other non-hero things
};

module.exports = {
  DOTAUnits: {
    Version: 1,

    // TODO Remove dummy unit
    npc_dummy_unit,
  },
};
