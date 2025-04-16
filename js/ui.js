
import { player, currentEnemy, setEnemy } from './state.js';

const scene = document.getElementById("scene");

// 各層の背景パターン定義
const backgroundPatterns = [
  { end: 999, images: ["images/backgrounds/fork.png"] }, // 第1層：固定背景
  { end: 1499, images: ["images/backgrounds/layer2_a.png", "images/backgrounds/layer2_b.png"] }, // 第2層
  { end: 4499, images: ["images/backgrounds/layer3_a.png", "images/backgrounds/layer3_b.png", "images/backgrounds/layer3_c.png"] } // 第3層
];

// 層の入口での帰還ポイント（進行距離）
const returnPoints = [1000, 1500, 4500];

// プレイヤーが前進する
document.getElementById("move").addEventListener("click", () => {
  if (currentEnemy) {
    logMessage("敵がまだいる！");
    return;
  }

  player.location += 50;

  // 背景の更新
  updateBackground(player.location);

  // 帰還ポイントチェック
  if (returnPoints.includes(player.location)) {
    logMessage("魔法陣を見つけた！ここから街に帰還できます。");
    return;
  }

  // 通常敵出現
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

// 攻撃ボタン
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

// 背景切り替えロジック
function updateBackground(location) {
  for (const layer of backgroundPatterns) {
    if (location <= layer.end) {
      const index = Math.floor((location % layer.images.length) % layer.images.length);
      scene.src = layer.images[index];
      return;
    }
  }
  scene.src = "images/backgrounds/fork.png"; // それ以外は通路背景
}

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
