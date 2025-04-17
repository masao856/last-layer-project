
// 汎用的な装備効果構造に対応

// 装備の例（複数効果対応、汎用構造）
const sampleWeapon = {
  id: "muramasa",
  name: "村正",
  type: "両手",
  power: 24,
  element: "火",
  effects: [
    { type: "attack_all", value: true },
    { type: "crit_rate", value: 100 },
    { type: "hp_drain", value: 30, condition: "per_turn" }
  ]
};

const sampleArmor = {
  id: "armor_paladin",
  name: "聖騎士の鎧",
  defense: 25,
  effects: [
    { type: "resist", target: "light", value: 20 },
    { type: "regen", target: "hp", value: 5 }
  ]
};

const sampleShield = {
  id: "guardian_shield",
  name: "遺跡の守護盾",
  defense: 9,
  effects: [
    { type: "stat_up", stat: "maxMp", value: 10 },
    { type: "stat_up", stat: "magicDefense", value: 5 }
  ]
};

// ステータス計算テンプレート（汎用構造用）
function applyEquipmentEffects(baseStats, equipment) {
  const finalStats = { ...baseStats };

  for (const part of ["rightHand", "leftHand", "armor", "shield"]) {
    const item = equipment[part];
    if (!item) continue;

    // 攻撃/防御の基本値
    if (item.power) finalStats.attack += item.power;
    if (item.defense) finalStats.defense += item.defense;

    if (item.effects) {
      for (const effect of item.effects) {
        switch (effect.type) {
          case "stat_up":
            finalStats[effect.stat] = (finalStats[effect.stat] || 0) + effect.value;
            break;
          case "resist":
            const key = effect.target + "Resist";
            finalStats[key] = (finalStats[key] || 0) + effect.value;
            break;
          case "regen":
            finalStats[effect.target + "Regen"] = (finalStats[effect.target + "Regen"] || 0) + effect.value;
            break;
          case "crit_rate":
            finalStats.critRate = (finalStats.critRate || 0) + effect.value;
            break;
          case "hp_drain":
            finalStats.hpDrainPerTurn = (finalStats.hpDrainPerTurn || 0) + effect.value;
            break;
          case "attack_all":
            finalStats.attackAll = true;
            break;
        }
      }
    }
  }

  return finalStats;
}

// 使用例
const baseStats = { maxHp: 100, maxMp: 20, attack: 10, defense: 5 };
const equipped = {
  rightHand: sampleWeapon,
  leftHand: null,
  armor: sampleArmor,
  shield: sampleShield
};

const final = applyEquipmentEffects(baseStats, equipped);
console.log(final);
