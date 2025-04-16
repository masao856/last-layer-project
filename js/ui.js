import { player, allies } from './state.js';

export function updateStats() {
  let html = `<p>${player.name} HP: ${player.hp}/${player.maxHp} MP: ${player.mp}/${player.maxMp} Gold: ${player.gold}</p>`;
  allies.forEach(a => {
    html += `<p>${a.name} HP: ${a.hp}/${a.maxHp} MP: ${a.mp}/${a.maxMp}</p>`;
  });
  document.getElementById("player-stats").innerHTML = html;
}

export function logMessage(msg) {
  document.getElementById("log").innerText = msg;
}
