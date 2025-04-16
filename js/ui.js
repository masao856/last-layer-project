import { player } from './state.js';

export function logMessage(message) {
  const logDiv = document.getElementById("log");
  logDiv.innerText = message;
}

export function updateBackground(location, patterns) {
  const background = document.getElementById("background");
  for (const pattern of patterns) {
    if (location <= pattern.end) {
      const image = pattern.images[Math.floor(Math.random() * pattern.images.length)];
      background.src = image;
      break;
    }
  }
}

export function showReturnOption() {
  logMessage("魔法陣が輝いている...『戻る』を押せば街に戻れる！");
}
