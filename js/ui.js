import { player } from './state.js';

export function logMessage(text) {
  document.getElementById("log").innerText = text;
}

export function updateStats() {
  document.getElementById("player-stats").innerText = `Gold: ${player.gold}`;
}
