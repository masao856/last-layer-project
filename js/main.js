import { renderItemList, updateStats } from './ui.js';

document.getElementById("showItems").addEventListener("click", () => {
  renderItemList();
});

updateStats();
