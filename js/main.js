import { initializeGame } from './state.js';
import { setupUI } from './ui.js';
import { setupBattle } from './battle.js';

document.addEventListener("DOMContentLoaded", () => {
  initializeGame();
  setupUI();
  setupBattle();
  console.log("main.js loaded");
});
