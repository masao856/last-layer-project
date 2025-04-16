import { setCurrentEnemy } from './state.js';
import { logMessage } from './ui.js';

const enemies = ["野盗", "ゾンビ", "獣人の野盗"];

export function encounterEnemy() {
  const enemy = enemies[Math.floor(Math.random() * enemies.length)];
  setCurrentEnemy(enemy);
  logMessage(`敵「${enemy}」が現れた！`);
}

document.getElementById("attack").addEventListener("click", () => {
  logMessage("攻撃した！敵を倒した！");
  setCurrentEnemy(null);
});
