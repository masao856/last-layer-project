
// 属性倍率テーブル（攻撃属性 → 防御対象の相性）
const elementalMultiplierTable = {
  "火":    { "弱点": ["氷"], "耐性": ["水"] },
  "水":    { "弱点": ["火"], "耐性": ["雷"] },
  "雷":    { "弱点": ["水"], "耐性": ["土"] },
  "光":    { "弱点": ["闇"], "耐性": [] },
  "闇":    { "弱点": ["光"], "耐性": [] },
  "毒":    { "弱点": [], "耐性": ["アンデッド"] },
  "無":    { "弱点": [], "耐性": [] }
};

// 属性倍率の基本値
function getElementalMultiplier(attackElement, defenderType, defenderResist = {}) {
  if (!attackElement || attackElement === "無") return 1.0;

  let mult = 1.0;

  const table = elementalMultiplierTable[attackElement];
  if (table?.弱点?.includes(defenderType)) mult = 1.5;
  if (table?.耐性?.includes(defenderType)) mult = 0.5;

  // 装備の属性耐性をさらに反映（数値的耐性）
  if (defenderResist[attackElement]) {
    mult *= (1 - defenderResist[attackElement] / 100);
  }

  return Math.max(0, mult); // 負の倍率は許さない
}

// 実際のダメージ計算
function calculateElementalDamage(attacker, defender, baseDamage) {
  const attackElement = attacker.weapon?.element || "無";
  const defenderStats = defender.stats || {};
  const resistMap = defenderStats.resist || {};
  const defenderType = defender.type || "";

  const multiplier = getElementalMultiplier(attackElement, defenderType, resistMap);
  const finalDamage = Math.floor(baseDamage * multiplier);

  return {
    base: baseDamage,
    element: attackElement,
    multiplier: multiplier,
    result: finalDamage
  };
}
