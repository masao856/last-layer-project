
import { player, currentEnemy, setCurrentEnemy } from './state.js';
import { logMessage } from './ui.js';

export function spawnEnemy() {
  const enemy = {
    name: "ゾンビ",
    hp: 18,
    maxHp: 18,
    weak: "光",
    resist: "毒"
  };
  setCurrentEnemy(enemy);
  logMessage(`敵「${enemy.name}」が現れた！（HP: ${enemy.hp}）`);
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
    let multiplier = 1.0;
    if (currentEnemy.weak === skill.attribute) multiplier = 1.5;
    if (currentEnemy.resist === skill.attribute) multiplier = 0.5;
    const dmg = Math.floor(skill.power * multiplier);
    currentEnemy.hp -= dmg;
    logMessage(`${skill.name} を使って敵に${dmg}ダメージを与えた！（属性：${skill.attribute}）`);
    if (currentEnemy.hp <= 0) {
      logMessage(`敵「${currentEnemy.name}」を倒した！`);
      setCurrentEnemy(null);
    }
  } else if (skill.type === "status") {
    logMessage(`${skill.name} を使った！敵を状態異常にした！（仮）`);
  }
}
