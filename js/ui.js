
import { skills } from './skills.js';
import { useSkill } from './battle.js';

export function logMessage(msg) {
  document.getElementById("log").innerText = msg;
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
