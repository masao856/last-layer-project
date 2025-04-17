
// 毎ターンHP自動回復処理（装備 or 効果による再生）

function applyAutoHpRegen(target, logId = "battleLog") {
  const regen = target.hpRegen || 0;
  if (regen > 0 && target.hp > 0) {
    const healed = Math.min(regen, target.maxHp - target.hp);
    target.hp += healed;

    if (healed > 0) {
      logToBattle(`${target.name} は自然回復で ${healed} 回復した！`, logId);
    }
  }
}

// バトルログ出力補助
function logToBattle(message, logId = "battleLog") {
  const logContainer = document.getElementById(logId);
  if (!logContainer) return;
  const log = document.createElement("div");
  log.className = "log-entry";
  log.textContent = message;
  logContainer.appendChild(log);
  logContainer.scrollTop = logContainer.scrollHeight;
}
