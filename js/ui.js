import { player } from './state.js';

export function setupUI() {
  document.getElementById("move").addEventListener("click", () => {
    console.log("進むコマンドが反応しました！");
  });
  document.getElementById("back").addEventListener("click", () => {
    console.log("戻るコマンドが反応しました！");
  });
  document.getElementById("attack").addEventListener("click", () => {
    console.log("攻撃コマンドが反応しました！");
  });
  document.getElementById("item").addEventListener("click", () => {
    console.log("アイテムコマンドが反応しました！");
  });
  document.getElementById("skill").addEventListener("click", () => {
    console.log("スキルコマンドが反応しました！");
  });
}
