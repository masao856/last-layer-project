
export let player = { location: 0 };
export let currentEnemy = null;

const log = document.getElementById("log");

function logMessage(msg) {
  log.innerText = msg;
}

document.getElementById("move").addEventListener("click", () => {
  if (currentEnemy) {
    logMessage("敵がまだいる！");
    return;
  }
  player.location += 50;
  logMessage("進んだ！現在地：" + player.location + "m");
});

document.getElementById("back").addEventListener("click", () => {
  logMessage("街に戻った！");
});

document.getElementById("attack").addEventListener("click", () => {
  logMessage("攻撃した！");
});
