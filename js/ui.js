import { player, allies, enemy } from './state.js';

export function updateStats() {
  let html = `<p>${player.name} (${player.job}) HP:${player.hp}/${player.maxHp} MP:${player.mp}/${player.maxMp}</p>`;
  allies.forEach(a => {
    html += `<p>${a.name} (${a.job}) HP:${a.hp}/${a.maxHp} MP:${a.mp}/${a.maxMp}</p>`;
  });
  html += `<p>${enemy.name} HP:${enemy.hp}/${enemy.maxHp}</p>`;
  document.getElementById("player-stats").innerHTML = html;
}

export function logMessage(msg) {
  const log = document.getElementById("log");
  log.innerText += msg + "\n";
}