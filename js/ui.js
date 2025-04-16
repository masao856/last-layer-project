import { player } from './state.js';

document.getElementById("move").addEventListener("click", () => {
  console.log("進むボタンが押されました");
});
document.getElementById("back").addEventListener("click", () => {
  console.log("戻るボタンが押されました");
});
document.getElementById("attack").addEventListener("click", () => {
  console.log("攻撃ボタンが押されました");
});
document.getElementById("item").addEventListener("click", () => {
  console.log("アイテムボタンが押されました");
});
document.getElementById("skill").addEventListener("click", () => {
  console.log("スキルボタンが押されました");
});
