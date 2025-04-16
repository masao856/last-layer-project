
import { player } from './state.js';
import { skills } from './skills.js';
import { items } from './items.js';
import { useSkill } from './battle.js';

export function logMessage(msg) {
  document.getElementById("log").innerText = msg;
  updateStatus();
}

export function updateStatus() {
  const stat = document.getElementById("status");
  stat.innerText = `HP: ${player.hp} / ${player.maxHp}　MP: ${player.mp} / ${player.maxMp}`;
}

export function showSkillList() {
  const log = document.getElementById("log");
  log.innerHTML = "<b>使用するスキルを選んでください：</b><br>";
  skills.forEach(skill => {
    const btn = document.createElement("button");
    btn.textContent = skill.name + "（" + skill.mpCost + "MP）";
    btn.onclick = () => {
      useSkill(skill);
    };
    log.appendChild(btn);
    log.appendChild(document.createElement("br"));
  });
}

export function showItemList() {
  const log = document.getElementById("log");
  log.innerHTML = "<b>使うアイテムを選んでください：</b><br>";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item.name;
    btn.onclick = () => {
      if (item.type === "heal") {
        player.hp = Math.min(player.maxHp, player.hp + item.amount);
        logMessage(`${item.name} を使ってHPが${item.amount}回復した！`);
      } else if (item.type === "mp") {
        player.mp = Math.min(player.maxMp, player.mp + item.amount);
        logMessage(`${item.name} を使ってMPが${item.amount}回復した！`);
      }
    };
    log.appendChild(btn);
    log.appendChild(document.createElement("br"));
  });
}
