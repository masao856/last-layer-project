
// treasures.js, special_weapons.js 読み込み前提

// 戦闘後に宝箱を抽選
function checkTreasureDrop() {
  const roll = Math.random();
  if (roll < treasures.large.rate) {
    return openTreasureBox('large');
  } else if (roll < treasures.large.rate + treasures.medium.rate) {
    return openTreasureBox('medium');
  } else if (roll < treasures.large.rate + treasures.medium.rate + treasures.small.rate) {
    return openTreasureBox('small');
  }
  return null; // 何も出ない
}

// 宝箱の中身を決定
function openTreasureBox(rank) {
  const box = treasures[rank];
  let roll = Math.random();
  let cumulative = 0;
  for (const item of box.items) {
    cumulative += item.rate;
    if (roll < cumulative) {
      if (item.item === "特別武器（ランダム効果付き）") {
        return generateSpecialWeapon();
      }
      return { type: "item", name: item.item };
    }
  }
  return null;
}

// 特別武器の生成（3つの効果をランダムで付与）
function generateSpecialWeapon() {
  const effects = [...specialWeaponEffects];
  const selected = [];
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * effects.length);
    selected.push(effects.splice(index, 1)[0]); // 重複なし
  }
  const weaponNames = ["古代の剣", "砂の斧", "幻の槍", "紅蓮の杖"];
  const baseName = weaponNames[Math.floor(Math.random() * weaponNames.length)];
  const fullName = `${baseName}（${selected.join("／")}）`;
  return {
    type: "special_weapon",
    name: fullName,
    effects: selected
  };
}
