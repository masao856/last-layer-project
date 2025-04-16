
import { player } from './state.js';
import { updateBackground } from './ui.js';

function log(msg) {
  document.getElementById("log").innerText = msg;
}

document.getElementById("move").addEventListener("click", () => {
  player.location += 100;
  updateBackground();
  log("進んだ！");
});

document.getElementById("back").addEventListener("click", () => {
  if (player.location >= 100) {
    player.location -= 100;
  }
  updateBackground();
  log("戻った！");
});

document.getElementById("attack").addEventListener("click", () => {
  log("攻撃した！");
});
document.getElementById("item").addEventListener("click", () => {
  log("アイテムを使った！");
});
document.getElementById("skill").addEventListener("click", () => {
  log("スキルを使った！");
});

updateBackground();
