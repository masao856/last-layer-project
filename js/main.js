import { rollTreasureEvent } from './event.js';

document.getElementById("move").addEventListener("click", () => {
  const result = rollTreasureEvent();
  const bg = document.getElementById("background");
  const log = document.getElementById("log");
  const openBtn = document.getElementById("openTreasure");

  if (result) {
    bg.src = `background_treasure_${result}.png`;
    log.innerText = `宝箱（${result}）を発見した！`;
    openBtn.style.display = "inline";
  } else {
    bg.src = "images/backgrounds/fork.png";
    log.innerText = "何も見つからなかった。";
    openBtn.style.display = "none";
  }
});

document.getElementById("openTreasure").addEventListener("click", () => {
  const log = document.getElementById("log");
  log.innerText = "宝箱を開いた！中身を取得した！（仮）";
  document.getElementById("openTreasure").style.display = "none";
});
