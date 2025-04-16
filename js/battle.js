import { player, allies, enemy } from './state.js';
import { logMessage, updateStats } from './ui.js';

function act(entity, target) {
  if (entity.hp <= 0) return;
  let damage = 5;
  if (entity.job === "魔法使い" && entity.mp >= 3) {
    damage = 10;
    entity.mp -= 3;
    logMessage(`${entity.name} は魔法を使った！`);
  } else {
    logMessage(`${entity.name} の攻撃！`);
  }
  target.hp -= damage;
  logMessage(`${target.name} に ${damage} ダメージ！`);
}

export function startBattle() {
  const turnOrder = [player, ...allies, enemy].filter(e => e.hp > 0).sort((a, b) => b.speed - a.speed);
  for (const entity of turnOrder) {
    if (entity === enemy) {
      const targets = [player, ...allies].filter(e => e.hp > 0);
      const target = targets[Math.floor(Math.random() * targets.length)];
      logMessage(`${enemy.name} の攻撃！`);
      target.hp -= 4;
      logMessage(`${target.name} は 4 ダメージを受けた！`);
    } else {
      act(entity, enemy);
    }
    if (enemy.hp <= 0) {
      logMessage(`${enemy.name} を倒した！`);
      break;
    }
  }
  updateStats();
}