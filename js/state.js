export const player = {
  hp: 20,
  mp: 10,
  location: 0,
};

export let currentEnemy = null;

export function setEnemy(enemy) {
  currentEnemy = enemy;
}
