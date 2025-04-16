
import { logMessage, showSkillList, showItemList, updateStatus } from './ui.js';
import { spawnEnemy } from './battle.js';

document.getElementById("move").addEventListener("click", () => {
  logMessage("敵が現れた！");
  spawnEnemy();
  updateStatus();
});
document.getElementById("back").addEventListener("click", () => {
  logMessage("街に戻った！");
});
document.getElementById("attack").addEventListener("click", () => {
  logMessage("通常攻撃！（仮）");
});
document.getElementById("item").addEventListener("click", () => showItemList());
document.getElementById("skill").addEventListener("click", () => showSkillList());
