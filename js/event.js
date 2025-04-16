import { player } from './state.js';

export function rollTreasureEvent() {
  const roll = Math.random() * 100;
  if (roll < 0.2) return "large";
  else if (roll < 2.2) return "medium";
  else if (roll < 7.2) return "small";
  return null;
}

export function getTreasureReward(tier) {
  let gold = 0;
  if (tier === "small") gold = 10;
  else if (tier === "medium") gold = 30;
  else if (tier === "large") gold = 100;

  player.gold += gold;
  return gold;
}