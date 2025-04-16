export let player = {
  hp: 20,
  mp: 10,
  location: 0
};

export let currentEnemy = null;

export function initializeGame() {
  player.hp = 20;
  player.mp = 10;
  player.location = 0;
}
