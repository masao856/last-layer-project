console.log("main.js loaded");

function log(msg) {
  document.getElementById("log").innerText = msg;
}

document.getElementById("move").addEventListener("click", () => {
  log("進んだ！");
});
document.getElementById("back").addEventListener("click", () => {
  log("戻った！");
});
document.getElementById("attack").addEventListener("click", () => {
  log("攻撃した！");
});
document.getElementById("item").addEventListener("click", () => {
  log("アイテムボタンが反応！");
});
document.getElementById("skill").addEventListener("click", () => {
  log("スキルボタンが反応！");
});
