
import { player, currentEnemy, setCurrentEnemy } from './state.js';
import { logMessage } from './ui.js';

export function spawnEnemy() {
  const enemy = {
    name: "ゾンビ",
    hp: 18,
    maxHp: 18,
    weak: "fire",
    resist: "poison"
  };
  setCurrentEnemy(enemy);
  logMessage(`敵「${enemy.name}」が現れた！（HP: ${enemy.hp} / 弱点: ${enemy.weak}）`);
}

export function useSkill(skill) {
  if (player.mp < skill.mpCost) {
    logMessage("MPが足りない！");
    return;
  }
  player.mp -= skill.mpCost;

  if (skill.type === "heal") {
    player.hp = Math.min(player.maxHp, player.hp + skill.power);
    logMessage(`${skill.name} を使ってHPが${skill.power}回復した！`);
  } else if (skill.type === "attack") {
    if (!currentEnemy) return logMessage("敵がいない！");

    // 属性比較ログ出力
    console.log("skill.attribute:", skill.attribute);
    console.log("enemy.weak:", currentEnemy.weak);
    console.log("enemy.resist:", currentEnemy.resist);

    let dmg = 10;
    if (currentEnemy.weak === skill.attribute) {
      dmg = skill.power;
      console.log("→ 弱点一致！");
    } else if (currentEnemy.resist === skill.attribute) {
      dmg = 5;
      console.log("→ 耐性一致！");
    } else {
      console.log("→ 通常属性");
    }

    currentEnemy.hp -= dmg;
    logMessage(`${skill.name} を使って敵に${dmg}ダメージ！（属性: ${skill.attribute}）`);

    if (currentEnemy.hp <= 0) {
      logMessage(`敵「${currentEnemy.name}」を倒した！`);
      setCurrentEnemy(null);
    }
  } else if (skill.type === "status") {
    logMessage(`${skill.name} を使って状態異常を与えた！（仮）`);
  }
}
