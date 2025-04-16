
import { player, currentEnemy, setCurrentEnemy } from './state.js';
import { logMessage } from './ui.js';
import { skills } from './skills.js';

export function castSkillByName(name) {
  const skill = skills[name];
  if (!skill) return logMessage("無効なスキル！");
  if (player.mp < skill.cost) return logMessage("MPが足りない！");

  player.mp -= skill.cost;

  if (skill.type === "heal") {
    player.hp = Math.min(player.maxHp, player.hp + skill.power);
    logMessage(`${name} を使った！HPが回復した！`);
  } else if (skill.type === "attack") {
    if (!currentEnemy) return logMessage("敵がいない！");
    logMessage(`${name} を放った！${skill.attribute}属性の攻撃！`);
    // 敵に属性処理とか追加予定
    setCurrentEnemy(null); // ダミーで即撃破
  } else if (skill.type === "status") {
    logMessage(`${name} を使った！敵に状態異常を与えた！`);
  }
}

window.castSkillByName = castSkillByName;
