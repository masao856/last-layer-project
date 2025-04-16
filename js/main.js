import { player, allies } from './state.js';
import { updateStats, logMessage } from './ui.js';

updateStats();
logMessage("仲間と共に冒険を始めた！");

window.changeName = function(who) {
  if (who === "player") {
    const name = document.getElementById("nameInput").value;
    if (name) player.name = name;
  } else if (who === "ally1") {
    const name = document.getElementById("ally1Input").value;
    if (name) allies[0].name = name;
  } else if (who === "ally2") {
    const name = document.getElementById("ally2Input").value;
    if (name) allies[1].name = name;
  }
  updateStats();
};
