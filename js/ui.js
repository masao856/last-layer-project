
import { player } from './state.js';

export function updateBackground() {
  const bg = document.getElementById("background");
  const loc = player.location;

  if (loc < 1000) {
    bg.src = "images/backgrounds/fork.png";
  } else if (loc < 2000) {
    bg.src = "images/backgrounds/fountain_dark_dungeon.png";
  } else {
    bg.src = "images/backgrounds/safe_zone_background.png";
  }
}
