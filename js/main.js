
import { logMessage } from './ui.js';

document.getElementById("move").addEventListener("click", () => logMessage("進んだ！"));
document.getElementById("back").addEventListener("click", () => logMessage("戻った！"));
document.getElementById("attack").addEventListener("click", () => logMessage("攻撃した！"));
document.getElementById("item").addEventListener("click", () => logMessage("アイテムボタンが押された！"));
document.getElementById("skill").addEventListener("click", () => logMessage("スキルボタンが押された！"));
