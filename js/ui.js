export function updatePlayerStats() {
  const stats = document.getElementById("player-stats");
  stats.innerText = `HP: ${player.hp} / ${player.hp}　MP: ${player.mp} / ${player.mp}　Gold: ${player.gold}`;
}