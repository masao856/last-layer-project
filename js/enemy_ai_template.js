
// 敵の行動を決定する関数
function decideEnemyAction(enemy, allies) {
  const livingAllies = allies.filter(a => a.hp > 0);
  const target = livingAllies[Math.floor(Math.random() * livingAllies.length)];

  switch (enemy.aiType) {
    case "aggressive":
      return {
        action: "attack",
        target: target
      };

    case "caster":
      if (enemy.skills && enemy.skills.length > 0 && Math.random() < 0.7) {
        const skill = enemy.skills[Math.floor(Math.random() * enemy.skills.length)];
        return {
          action: "skill",
          skill: skill,
          target: target
        };
      } else {
        return {
          action: "attack",
          target: target
        };
      }

    case "tricky":
      if (enemy.skills && enemy.skills.includes("ポイズン") && Math.random() < 0.6) {
        return {
          action: "skill",
          skill: "ポイズン",
          target: target
        };
      }
      return {
        action: "attack",
        target: target
      };

    case "defensive":
      if (enemy.hp < enemy.maxHp / 2 && enemy.skills.includes("ヒール")) {
        return {
          action: "skill",
          skill: "ヒール",
          target: enemy
        };
      }
      return {
        action: "attack",
        target: target
      };

    case "boss_pattern1":
      if (enemy.turnCount && enemy.turnCount % 3 === 0 && enemy.skills.includes("ダークネスウェーブ")) {
        return {
          action: "skill",
          skill: "ダークネスウェーブ",
          target: target
        };
      }
      return {
        action: "attack",
        target: target
      };

    default:
      return {
        action: "attack",
        target: target
      };
  }
}
