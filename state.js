
export const player = {
  hp: 20, mp: 10, maxHp: 20, maxMp: 10,
  atk: 5, matk: 3, def: 3, mdef: 2, spd: 5,
  exp: 0, level: 1, location: 0,
  items: [{ name: "ポーション", icon: "item_potion_basic_fire.png" }],
  skills: ["ファイアボール", "ヒール"],
  equipped: "ショートソード"
};

export let currentEnemy = null;

export function setEnemy(enemy) {
  currentEnemy = enemy;
}
