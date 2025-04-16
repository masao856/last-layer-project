
export const player = {
  hp: 20,
  maxHp: 20,
  mp: 10,
  maxMp: 10
};

export let currentEnemy = null;

export function setCurrentEnemy(enemy) {
  currentEnemy = enemy;
}
