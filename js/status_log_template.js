
// ログ表示欄を指定して状態異常の変化をログとして表示

function logStatusEffect(effect, target, logId = "battleLog") {
  const logContainer = document.getElementById(logId);
  if (!logContainer) return;

  const log = document.createElement("div");
  log.className = "log-entry";

  switch (effect.type) {
    case "毒":
      log.textContent = `${target.name} は毒状態になった！`;
      break;
    case "マヒ":
      log.textContent = `${target.name} はマヒして動けなくなった！`;
      break;
    case "凍結":
      log.textContent = `${target.name} は凍りついた！`;
      break;
    case "呪い":
      log.textContent = `${target.name} は呪われた…！`;
      break;
    default:
      log.textContent = `${target.name} に ${effect.type} が付与された`;
  }

  logContainer.appendChild(log);
  logContainer.scrollTop = logContainer.scrollHeight; // 最新にスクロール
}
