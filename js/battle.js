
import { logMessage } from './ui.js';

let player = {
  mp: 10,
  maxMp: 10,
  hp: 20,
  maxHp: 20
};

export function useSkill(skill) {
  if (player.mp < skill.mpCost) {
    logMessage("MPが足りない！");
    return;
  }
  player.mp -= skill.mpCost;

  if (skill.type === "attack") {
    logMessage(`${skill.name} を使った！ ${skill.attribute}属性の攻撃！（仮）`);
  } else if (skill.type === "heal") {
    player.hp = Math.min(player.maxHp, player.hp + skill.power);
    logMessage(`${skill.name} を使ってHPが回復した！（+${skill.power}）`);
  } else if (skill.type === "status") {
    logMessage(`${skill.name} を使って状態異常を付与！（仮）`);
  }
}
