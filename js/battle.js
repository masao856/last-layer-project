import { skills } from './skills.js';
import { currentEnemy } from './state.js';
import { logMessage } from './ui.js';

function calculateSkillDamage(skill, enemy) {
  if (!skill || !enemy) return 0;
  if (enemy.weakness === skill.element) {
    return skill.power;
  } else if (enemy.resistance === skill.element) {
    return 5;
  } else {
    return 10;
  }
}

export function useSkill(skillKey, player, enemy) {
  const skill = skills[skillKey];
  if (!skill) {
    logMessage("スキルが見つかりません！");
    return;
  }

  if (player.mp < skill.cost) {
    logMessage("MPが足りない！");
    return;
  }

  player.mp -= skill.cost;

  if (skill.type === "attack") {
    const damage = calculateSkillDamage(skill, enemy);
    enemy.hp -= damage;
    logMessage(`${skill.name} を使って敵に${damage}ダメージ！（属性: ${skill.element}）`);
  } else if (skill.type === "heal") {
    const heal = -skill.power;
    player.hp = Math.min(player.maxHp, player.hp + heal);
    logMessage(`${skill.name} を使ってHPを${heal}回復！（属性: ${skill.element}）`);
  } else if (skill.type === "status") {
    logMessage(`${skill.name} を使った！（状態異常: ${skill.element}）`);
  }
}
