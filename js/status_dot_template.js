
// 毒・呪いなどの継続ダメージ処理（ターン終了時）

function applyDamageOverTimeEffects(target, logId = "battleLog") {
  if (!target.statusEffects) return;

  for (const effect of target.statusEffects) {
    let damage = 0;
    if (effect.type === "毒" && effect.damagePerTurn) {
      damage = effect.damagePerTurn;
    } else if (effect.type === "呪い") {
      damage = 5; // 呪いは固定ダメージ（例）
    }

    if (damage > 0) {
      target.hp = Math.max(0, target.hp - damage);
      logToBattle(`${target.name} は ${effect.type} により ${damage} のダメージを受けた！`, logId);
    }
  }
}

// バトルログにメッセージを出力
function logToBattle(message, logId = "battleLog") {
  const logContainer = document.getElementById(logId);
  if (!logContainer) return;
  const log = document.createElement("div");
  log.className = "log-entry";
  log.textContent = message;
  logContainer.appendChild(log);
  logContainer.scrollTop = logContainer.scrollHeight;
}
