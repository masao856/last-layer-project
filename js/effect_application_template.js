
// baseStats: { maxHp, maxMp, attack, defense, speed, magicDefense, ... }
// equipped: { rightHand, leftHand, armor, shield }

function applyEquipmentEffects(baseStats, equipped) {
  const result = { ...baseStats };
  result.hpRegen = 0;
  result.resist = {};
  result.immunities = [];

  const allGear = [equipped.rightHand, equipped.leftHand, equipped.armor, equipped.shield];

  for (const gear of allGear) {
    if (!gear || !gear.effects) continue;

    for (const effect of gear.effects) {
      switch (effect.type) {
        case "statBoost":
          result[effect.target] = (result[effect.target] || 0) + effect.value;
          break;

        case "resist":
          result.resist[effect.target] = (result.resist[effect.target] || 0) + effect.value;
          break;

        case "regen":
          if (effect.target === "hp") result.hpRegen += effect.value;
          break;

        case "critRate":
          result.critRate = (result.critRate || 0) + effect.value;
          break;

        case "aoe":
          result.aoe = true;
          break;

        case "hpPenalty":
          result.hpPenalty = (result.hpPenalty || 0) + effect.value;
          break;

        case "multiHit":
          result.multiHit = true;
          break;

        case "ignoreDefense":
          result.ignoreDefense = true;
          break;

        case "statusEffect":
          result.inflictStatus = effect.value;
          break;

        case "immune":
          if (effect.chance && Math.random() * 100 > effect.chance) break;
          result.immunities.push(effect.target);
          break;

        case "reflect":
          result.reflect = result.reflect || {};
          result.reflect[effect.target] = effect.chance || 100;
          break;

        default:
          console.warn("Unknown effect type:", effect);
      }
    }
  }

  return result;
}
