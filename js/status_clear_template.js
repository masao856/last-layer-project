
// 戦闘終了時に状態異常・自動回復などの一時効果をリセット

function clearStatusEffects(target) {
  target.statusEffects = [];
  target.hpRegen = 0;
  target.canAct = true;
}
