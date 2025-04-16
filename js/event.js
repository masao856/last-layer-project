export function rollTreasureEvent() {
  const roll = Math.random() * 100;
  if (roll < 0.2) return "large";
  else if (roll < 2.2) return "medium";
  else if (roll < 7.2) return "small";
  return null;
}
