import { skills } from './skills.js';

console.log("main.js loaded");

document.getElementById("move").addEventListener("click", () => {
  logMessage("進むコマンドが反応しました！");
});

document.getElementById("back").addEventListener("click", () => {
  logMessage("戻るコマンドが反応しました！");
});

document.getElementById("attack").addEventListener("click", () => {
  logMessage("攻撃コマンドが反応しました！");
});

document.getElementById("item").addEventListener("click", () => {
  logMessage("アイテムコマンドが反応しました！");
});

document.getElementById("skill").addEventListener("click", () => {
  logMessage("スキルコマンドが反応しました！");
});

function logMessage(msg) {
  const log = document.getElementById("log");
  log.innerText = msg;
}
