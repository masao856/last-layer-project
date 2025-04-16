
import { player } from './state.js';
import { skills } from './skills.js';
import { castSkill } from './battle.js';

export function logMessage(msg) {
  document.getElementById("log").innerText = msg;
}

export function showSkillSelection() {
  let skillList = player.skills.map(name => {
    const s = skills[name];
    return `<button onclick="window.castSkillByName('${s.name}')">${s.name} (${s.cost}MP)</button>`;
  }).join("<br>");
  document.getElementById("log").innerHTML = "<b>スキルを選択:</b><br>" + skillList;
}
