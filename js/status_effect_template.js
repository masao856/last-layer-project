
// 状態異常構造（キャラ側に保持）
/*
例:
target.statusEffects = [
  { type: "マヒ", duration: 2 },
  { type: "毒", duration: 3, damagePerTurn: 5 }
];
*/

// 状態異常を付与する関数
function applyStatusEffect(target, effectType, duration, extra = {}) {
  if (!target.statusEffects) target.statusEffects = [];

  // すでに同じ効果がある場合は延長
  const existing = target.statusEffects.find(e => e.type === effectType);
  if (existing) {
    existing.duration = Math.max(existing.duration, duration);
    return;
  }

  const newEffect = { type: effectType, duration: duration, ...extra };
  target.statusEffects.push(newEffect);
}

// ターン経過時に状態異常を処理
function processStatusEffects(target) {
  if (!target.statusEffects) return;

  for (const effect of target.statusEffects) {
    if (effect.type === "毒" && effect.damagePerTurn) {
      target.hp -= effect.damagePerTurn;
      console.log(`${target.name} は毒で ${effect.damagePerTurn} のダメージを受けた！`);
    }

    if (effect.type === "マヒ") {
      target.canAct = false;
      console.log(`${target.name} はマヒして動けない！`);
    }

    if (effect.type === "凍結") {
      target.canAct = false;
      console.log(`${target.name} は凍りついている！`);
    }

    if (effect.type === "呪い") {
      target.attack -= 2;
    }

    // 追加処理があればここに
    // ...

    effect.duration -= 1;
  }

  // 終了した状態異常を除去
  target.statusEffects = target.statusEffects.filter(e => e.duration > 0);
}
