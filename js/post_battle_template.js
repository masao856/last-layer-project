
// 戦闘終了後の処理（経験値付与、宝箱抽選、状態異常リセットなど）

function handlePostBattle(player, enemy) {
  // 状態異常リセット
  clearStatusEffects(player);

  // 経験値獲得（仮に enemy.exp を持っているとする）
  const expGained = enemy.exp || 20;
  player.exp += expGained;
  logToBattle(`${player.name} は ${expGained} の経験値を得た！`);

  // 宝箱抽選
  const drop = checkTreasureDrop();
  if (drop) {
    if (drop.type === "item") {
      player.inventory.push(drop.name);
      logToBattle(`${player.name} は ${drop.name} を見つけた！`);
    } else if (drop.type === "special_weapon") {
      player.inventory.push(drop.name);
      logToBattle(`${player.name} は特別な武器『${drop.name}』を手に入れた！`);
    }
  }
}

// ログ出力関数
function logToBattle(message, logId = "battleLog") {
  const logContainer = document.getElementById(logId);
  if (!logContainer) return;
  const log = document.createElement("div");
  log.className = "log-entry";
  log.textContent = message;
  logContainer.appendChild(log);
  logContainer.scrollTop = logContainer.scrollHeight;
}
