import { reloadable } from "./lib/tstl-utils";
import "./modifiers/modifier_panic";

// TODO 1: Continue on global settings in init game mode
// TODO 2: Extract my helpers to their own NPM packages

declare global {
  interface CDOTAGamerules {
    Addon: GameMode;
  }
}

@reloadable
export class GameMode {
  public static Precache(this: void, context: CScriptPrecacheContext) {
    PrecacheResource("particle", "particles/units/heroes/hero_meepo/meepo_earthbind_projectile_fx.vpcf", context);
    PrecacheResource("soundfile", "soundevents/game_sounds_heroes/game_sounds_meepo.vsndevts", context);
  }

  public static Activate(this: void) {
    GameRules.Addon = new GameMode();
  }

  constructor() {
    this.configure();
    ListenToGameEvent("game_rules_state_change", () => this.OnStateChange(), undefined);
    ListenToGameEvent("npc_spawned", (event) => this.OnNpcSpawned(event), undefined);
  }

  private configure(): void {
    // Players
    GameRules.SetSafeToLeave(true);

    // Teams
    GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.GOODGUYS, 5);
    GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.BADGUYS, 0);

    // Hero selection
    // GameRules.SetSameHeroSelectionEnabled(true);

    // Times
    // GameRules.SetCustomGameSetupTimeout(0);
    // GameRules.SetCustomGameSetupAutoLaunchDelay(0);
    GameRules.SetHeroSelectionTime(120);
    GameRules.SetStrategyTime(0);
    GameRules.SetShowcaseTime(0);
    GameRules.SetPreGameTime(60);

    // Shop
    // GameRules.SetUseUniversalShopMode(true);
  }

  public OnStateChange(): void {
    const state = GameRules.State_Get();

    // Add 1 bot to lobby in tools
    if (IsInToolsMode() && state == GameState.CUSTOM_GAME_SETUP) {
      for (let i = 0; i < 1; i++) {
        Tutorial.AddBot("npc_dota_hero_lina", "", "", false);
      }
    }

    // Start game once pregame hits
    if (state == GameState.PRE_GAME) {
      Timers.CreateTimer(0.2, () => this.StartGame());
    }
  }

  private StartGame(): void {
    print("Game starting!");
    print(`Difficuly: ${GameRules.GetCustomGameDifficulty()}`);

    // Do some stuff here
  }

  // Called on script_reload
  public Reload() {
    print("Script reloaded!");

    // Do some stuff here
  }

  private OnNpcSpawned(event: NpcSpawnedEvent) {
    // Add examples if in tools
    if (IsInToolsMode()) {
      // After a hero unit spawns, apply modifier_panic for 8 seconds
      const unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC; // Cast to npc since this is the 'npc_spawned' event
      // if (unit.IsRealHero()) {
      Timers.CreateTimer(1, () => {
        unit.AddNewModifier(unit, undefined, "modifier_panic", { duration: 5 });
      });

      // if (!unit.HasAbility("meepo_earthbind_ts_example")) {
      //   // Add lua ability to the unit
      //   unit.AddAbility("meepo_earthbind_ts_example");
      // }
      if (!unit.HasAbility("typescript_skywrath_mage_arcane_bolt")) {
        unit.AddAbility("typescript_skywrath_mage_arcane_bolt");
      }
      // }
    }
  }
}
