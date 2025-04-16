
import { player, currentEnemy, setEnemy } from './state.js';

document.getElementById("move").addEventListener("click", () => {
  if (currentEnemy) {
    logMessage("敵がまだいる！");
    return;
  }

  const enemies = [
    { name: "影", hp: 10, atk: 4, def: 1, img: "images/shadow.png" },
    { name: "野盗", hp: 14, atk: 6, def: 2, img: "images/bandit.png" },
    { name: "獣人の野盗", hp: 16, atk: 5, def: 3, img: "images/beastman_bandit.png" },
    { name: "ゾンビ", hp: 18, atk: 4, def: 4, img: "images/zombie.png" },
    { name: "黒鉄の騎士", hp: 25, atk: 7, def: 6, img: "images/armor_knight.png" },
    { name: "堕ちた王", hp: 35, atk: 8, def: 4, img: "images/fallen_king.png" }
  ];

  const enemy = enemies[Math.floor(Math.random() * enemies.length)];
  setEnemy({ ...enemy });
  showEnemyImage(enemy.img);
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
    clearEnemyImage();
    setEnemy(null);
  }
});

function logMessage(text) {
  const log = document.getElementById("log");
  log.innerText = text;
}

function showEnemyImage(path) {
  let container = document.getElementById("enemyImage");
  if (!container) {
    container = document.createElement("div");
    container.id = "enemyImage";
    container.style.margin = "20px";
    document.body.insertBefore(container, document.getElementById("log").nextSibling);
  }
  container.innerHTML = `<img src="${path}" style="max-width: 200px; max-height: 200px;" alt="enemy" />`;
}

function clearEnemyImage() {
  const container = document.getElementById("enemyImage");
  if (container) container.innerHTML = "";
}
