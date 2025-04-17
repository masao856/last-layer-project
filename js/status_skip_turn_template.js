
// ターン開始時に行動不能系状態異常をチェックし、行動可否を決定する

function canActThisTurn(target) {
  if (!target.statusEffects) return true;

  for (const effect of target.statusEffects) {
    if (effect.type === "マヒ" || effect.type === "凍結" || effect.type === "気絶") {
      return false; // 行動不能
    }
  }

  return true;
}
