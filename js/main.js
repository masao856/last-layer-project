import { player, inventory } from './state.js';
import { updateStats, logMessage } from './ui.js';

document.getElementById("openShop").addEventListener("click", () => {
  document.getElementById("shop").style.display = "block";
});

window.closeShop = function() {
  document.getElementById("shop").style.display = "none";
};

window.buy = function(itemName) {
  const prices = {
    "テント": 50,
    "食糧": 20,
    "ポーション": 30,
    "エーテル": 40,
    "簡易魔法陣": 80
  };

  const price = prices[itemName];
  if (player.gold >= price) {
    player.gold -= price;
    inventory.push(itemName);
    logMessage(`${itemName} を購入した！`);
    updateStats();
  } else {
    logMessage(`ゴールドが足りない！`);
  }
};

updateStats();