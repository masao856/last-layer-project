
// 状態異常をUIに反映する関数
function updateStatusEffectsUI(target, containerId = "statusEffectsDisplay") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  if (!target.statusEffects || target.statusEffects.length === 0) {
    container.textContent = "状態異常なし";
    return;
  }

  for (const effect of target.statusEffects) {
    const div = document.createElement("div");
    div.className = "status-effect";
    div.textContent = `${effect.type}（残り${effect.duration}T）`;
    container.appendChild(div);
  }
}
