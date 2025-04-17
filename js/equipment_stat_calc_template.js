
// 必要データ：装備中の武器（右手・左手）、鎧、防具、基礎ステータス

function calculateFinalStats(baseStats, equipped) {
  let final = { ...baseStats };

  // 武器（右手・左手）
  const weapons = [equipped.rightHand, equipped.leftHand];
  weapons.forEach(weapon => {
    if (weapon) {
      final.attack += weapon.power || 0;

      if (weapon.effects) {
        for (const effect of weapon.effects) {
          if (effect === "攻撃力1.5倍") {
            final.attack = Math.floor(final.attack * 1.5);
          }
          if (effect === "防御+999") {
            final.defense += 999;
          }
          if (effect === "毎ターンHP50回復") {
            final.hpRegen = (final.hpRegen || 0) + 50;
          }
          // 他の武器効果もここで追加可能
        }
      }
    }
  });

  // 鎧
  if (equipped.armor) {
    final.defense += equipped.armor.defense || 0;
    if (equipped.armor.effects) {
      for (const effect of equipped.armor.effects) {
        if (effect === "物理耐性+10%") {
          final.physicalResist = (final.physicalResist || 0) + 10;
        }
        if (effect === "光耐性+10%") {
          final.lightResist = (final.lightResist || 0) + 10;
        }
        if (effect === "最大HP-10") {
          final.maxHp -= 10;
        }
      }
    }
  }

  // 盾
  if (equipped.shield) {
    final.defense += equipped.shield.defense || 0;
    if (equipped.shield.effects) {
      for (const effect of equipped.shield.effects) {
        if (effect === "魔防+5") {
          final.magicDefense = (final.magicDefense || 0) + 5;
        }
        if (effect === "MP+10") {
          final.maxMp += 10;
        }
      }
    }
  }

  return final;
}

// 例：初期ステータスと装備
const baseStats = { maxHp: 100, maxMp: 30, attack: 10, defense: 5 };
const equipped = {
  rightHand: { name: "村正", power: 24, effects: ["クリティカル率100%", "全体攻撃", "毎ターンHP30%ダメージ"] },
  leftHand: null,
  armor: { name: "黒鉄の鎧", defense: 15, effects: ["物理耐性+10%"] },
  shield: null
};

const result = calculateFinalStats(baseStats, equipped);
console.log(result);
