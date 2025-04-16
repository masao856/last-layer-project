import { startBattle } from './battle.js';
import { updateStats } from './ui.js';

updateStats();
document.getElementById("startBattle").addEventListener("click", startBattle);
