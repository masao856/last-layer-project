
import { player, currentEnemy, setCurrentEnemy } from "./state.js";
import { logMessage, updateBackground, updateCommandUI, showReturnOption } from "./ui.js";
import { maybeEncounterEnemy } from "./battle.js";

const scene = document.getElementById("scene");

const backgroundPatterns = [
  { end: 999, images: ["images/backgrounds/layer1_a.png"] },
  { end: 1499, images: ["images/backgrounds/layer2_a.png", "images/backgrounds/layer2_b.png"] },
  { end: 4499, images: ["images/backgrounds/layer3_a.png", "images/backgrounds/layer3_b.png", "images/backgrounds/layer3_c.png"] },
];

const returnPoints = [1000, 1500, 4500];

document.getElementById("move").addEventListener("click", () => {
  if (currentEnemy) {
    logMessage("敵がまだいる！");
    return;
  }

  player.location += 50;
  updateBackground(player.location);

  if (returnPoints.includes(player.location)) {
    logMessage("魔法陣を見つけた！ここから街に戻れる！");
    showReturnOption();
    return;
  }

  maybeEncounterEnemy();
  updateCommandUI(); // ここが重要
});
