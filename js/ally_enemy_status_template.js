
// 味方・敵の状態異常をUIに反映し、ログにも出力する

function handleStatusEffectUIAndLog(target, effect, options = {}) {
  const { logId = "battleLog", uiContainerId = null } = options;

  // ログに表示
  logStatusEffect(effect, target, logId);

  // UI更新（デフォルトUI IDを対象名で分ける）
  const containerId = uiContainerId || (target.side === "enemy" ? "enemyStatusUI" : "allyStatusUI");
  updateStatusEffectsUI(target, containerId);
}
