import { player, allies } from './state.js';

export function updateStats() {
  let html = `<p><img src="${player.icon}" width="32"> ${player.name} (${player.job}) HP:${player.hp}/${player.maxHp} MP:${player.mp}/${player.maxMp}</p>`;
  allies.forEach((a, i) => {
    html += `<p><img src="${a.icon}" width="32"> ${a.name} (${a.job}) HP:${a.hp}/${a.maxHp} MP:${a.mp}/${a.maxMp}</p>`;
  });
  document.getElementById("player-stats").innerHTML = html;
}

export function logMessage(msg) {
  document.getElementById("log").innerText = msg;
}