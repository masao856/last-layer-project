import { showSkillOptions } from './ui.js';
import { player } from './state.js';

function log(msg) {
  document.getElementById("log").innerText = msg;
}

document.getElementById("move").addEventListener("click", () => {
  player.location += 100;
  log("進んだ！");
});

document.getElementById("back").addEventListener("click", () => {
  player.location = Math.max(0, player.location - 100);
  log("戻った！");
});

document.getElementById("attack").addEventListener("click", () => {
  log("攻撃した！");
});

document.getElementById("item").addEventListener("click", () => {
  log("アイテムを使った！");
});

document.getElementById("skill").addEventListener("click", () => {
  showSkillOptions();
});
