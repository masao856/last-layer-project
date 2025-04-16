
import { player, currentEnemy, setEnemy } from './state.js';

document.getElementById("move").addEventListener("click", () => {
  if (currentEnemy) {
    logMessage("敵がまだいる！");
    return;
  }

  const enemies = [
    { name: "野盗", hp: 14, atk: 6, def: 2 },
    { name: "ゾンビ", hp: 18, atk: 4, def: 4 },
    { name: "獣人の野盗", hp: 16, atk: 5, def: 3 }
  ];
  const enemy = enemies[Math.floor(Math.random() * enemies.length)];
  setEnemy({ ...enemy });
  logMessage(`${enemy.name} が現れた！`);
});

document.getElementById("attack").addEventListener("click", () => {
  if (!currentEnemy) {
    logMessage("敵がいない！");
    return;
  }

  const damage = Math.max(0, player.atk - currentEnemy.def);
  currentEnemy.hp -= damage;

  logMessage(`あなたの攻撃！ ${damage} ダメージを与えた！`);

  if (currentEnemy.hp <= 0) {
    logMessage(`${currentEnemy.name} を倒した！`);
    setEnemy(null);
  }
});

function logMessage(text) {
  const log = document.getElementById("log");
  log.innerText = text;
}
