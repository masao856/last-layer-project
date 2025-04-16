import { player, inventory } from './state.js';
import { useItem } from './items.js';

export function logMessage(msg) {
  document.getElementById("log").innerText = msg;
  updateStats();
}

export function updateStats() {
  document.getElementById("player-stats").innerText =
    `HP: ${player.hp}/${player.maxHp}　MP: ${player.mp}/${player.maxMp}　Gold: ${player.gold}`;
}

export function renderItemList() {
  const ul = document.getElementById("itemList");
  ul.innerHTML = "";
  inventory.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerText = item;
    const btn = document.createElement("button");
    btn.innerText = "使う";
    btn.onclick = () => useItem(i);
    li.appendChild(btn);
    ul.appendChild(li);
  });
}
