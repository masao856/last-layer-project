
// スキル使用時に状態異常を付与する処理（skills.js, status_effect_template.js 前提）

function useSkill(skillName, attacker, defender) {
  const skill = skills[skillName];
  if (!skill) return null;

  let result = {
    skill: skillName,
    damage: 0,
    effectApplied: false
  };

  if (skill.isHealing) {
    const percent = skill.percentHeal || 0;
    const healAmount = Math.floor(attacker.maxHp * percent);
    attacker.hp = Math.min(attacker.maxHp, attacker.hp + healAmount);
    result.healed = healAmount;
    console.log(`${attacker.name} は ${healAmount} 回復した！`);
    return result;
  }

  // ダメージ計算（属性反映含む）
  const calc = calculateSkillDamage(skillName, attacker, defender);
  defender.hp -= calc.result;
  result.damage = calc.result;

  // 状態異常の効果がある場合、一定確率で付与（デフォルト：100%）
  if (skill.effect) {
    const chance = skill.effectChance || 100;
    if (Math.random() * 100 < chance) {
      const duration = skill.effectDuration || 2;
      const extra = {};

      if (skill.effect === "毒" || skill.effect === "持続ダメージ") {
        extra.damagePerTurn = 5;
      }

      applyStatusEffect(defender, skill.effect, duration, extra);
      result.effectApplied = true;
      console.log(`${defender.name} に ${skill.effect} を付与！`);
    }
  }

  return result;
}
