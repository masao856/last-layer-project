import { initState } from './state.js';
import { showSkillOptions } from './ui.js';
import './battle.js';

document.getElementById("move").addEventListener("click", () => {
  logMessage("進むコマンドが押されました！");
});
document.getElementById("back").addEventListener("click", () => {
  logMessage("戻るコマンドが押されました！");
});
document.getElementById("attack").addEventListener("click", () => {
  logMessage("攻撃コマンドが押されました！");
});
document.getElementById("item").addEventListener("click", () => {
  logMessage("アイテムコマンドが押されました！");
});
document.getElementById("skill").addEventListener("click", () => {
  showSkillOptions();
});

function logMessage(text) {
  const log = document.getElementById("log");
  log.innerText = text;
}
