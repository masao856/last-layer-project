// 最小限の動作コード（進むだけでも動作チェック用）
document.getElementById("move").addEventListener("click", () => {
  const log = document.getElementById("log");
  log.innerText = "進んだ！（動作確認OK）";
});
document.getElementById("attack").addEventListener("click", () => {
  const log = document.getElementById("log");
  log.innerText = "攻撃した！（動作確認OK）";
});
document.getElementById("back").addEventListener("click", () => {
  const log = document.getElementById("log");
  log.innerText = "戻った！（動作確認OK）";
});
document.getElementById("item").addEventListener("click", () => {
  const log = document.getElementById("log");
  log.innerText = "アイテムを使った！（動作確認OK）";
});
document.getElementById("skill").addEventListener("click", () => {
  const log = document.getElementById("log");
  log.innerText = "スキルを使った！（動作確認OK）";
});
