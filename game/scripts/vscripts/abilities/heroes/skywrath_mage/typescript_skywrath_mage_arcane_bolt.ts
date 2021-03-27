import { BaseAbility, registerAbility } from "../../../lib/dota_ts_adapter";

@registerAbility()
export class typescript_skywrath_mage_arcane_bolt extends BaseAbility {
  sound_cast = "Hero_SkywrathMage.ArcaneBolt.Cast";
  sound_impact = "Hero_SkywrathMage.ArcaneBolt.Impact";
  projectile_arcane_bolt = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";

  OnSpellStart() {
    const caster = this.GetCaster();
    const target = this.GetCursorTarget();
    const bolt_speed = this.GetSpecialValueFor("bolt_speed");
    const bolt_vision = this.GetSpecialValueFor("bolt_vision");

    EmitSoundOn(this.sound_cast, caster);

    ProjectileManager.CreateTrackingProjectile({
      Ability: this,
      EffectName: this.projectile_arcane_bolt,
      Source: caster,
      Target: target,
      bDodgeable: false,
      bProvidesVision: true,
      iMoveSpeed: bolt_speed,
      iVisionRadius: bolt_vision,
      iVisionTeamNumber: caster.GetTeamNumber(),
    });
  }

  OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector) {
    if (!target) {
      return;
    }

    const caster = this.GetCaster();
    const bolt_vision = this.GetSpecialValueFor("bolt_vision");
    const bolt_damage = this.GetSpecialValueFor("bolt_damage");
    const int_multiplier = this.GetSpecialValueFor("int_multiplier");
    const vision_duration = this.GetSpecialValueFor("vision_duration");

    EmitSoundOn(this.sound_impact, target);

    AddFOWViewer(this.GetCaster().GetTeamNumber(), location, bolt_vision, vision_duration, false);

    let damage = bolt_damage;
    if (caster.IsHero()) {
      damage += caster.GetIntellect() * int_multiplier;
    }

    ApplyDamage({
      ability: this,
      attacker: caster,
      victim: target,
      damage,
      damage_type: DamageTypes.MAGICAL,
      damage_flags: DamageFlag.NONE,
    });
  }
}
