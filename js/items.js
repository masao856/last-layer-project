import { player, inventory } from './state.js';
import { logMessage, renderItemList } from './ui.js';

export function useItem(index) {
  const item = inventory[index];
  if (!item) return;

  let effectMsg = "";

  if (item === "ポーション") {
    player.hp = Math.min(player.maxHp, player.hp + 20);
    effectMsg = "HPが20回復した！";
  } else if (item === "エーテル") {
    player.mp = Math.min(player.maxMp, player.mp + 15);
    effectMsg = "MPが15回復した！";
  } else if (item === "テント") {
    // 実際の野営時条件は別処理
    player.hp = player.maxHp;
    player.mp = player.maxMp;
    effectMsg = "野営してHP/MPが全回復した！";
  } else if (item === "食糧") {
    effectMsg = "食糧を消費した。（仮）";
  } else if (item === "簡易魔法陣") {
    effectMsg = "街へワープした！（仮）";
  }

  inventory.splice(index, 1);
  logMessage(`${item} を使用：${effectMsg}`);
  renderItemList();
}
