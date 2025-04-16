import { player, currentEnemy, setCurrentEnemy, enemies } from './state.js';
import { logMessage, updateBackground, showReturnOption, showSkillOptions, showItemOptions } from './ui.js';
import { skills } from './skills.js';

document.getElementById("move").addEventListener("click", () => {
    if (currentEnemy) {
        logMessage("敵がまだいる！");
        return;
    }
    player.location += 50;
    updateBackground(player.location);
    if ([1000, 1500, 3000].includes(player.location)) {
        logMessage("魔法陣を見つけた！ここから街に戻れる！");
        showReturnOption();
        return;
    }
    if (Math.random() < 0.5) {
        const enemy = structuredClone(enemies[Math.floor(Math.random() * enemies.length)]);
        setCurrentEnemy(enemy);
        logMessage(`敵「${enemy.name}」が現れた！（HP: ${enemy.hp} / 弱点: ${enemy.weakness}）`);
    }
});

document.getElementById("back").addEventListener("click", () => {
    if (player.location === 0) {
        logMessage("もう戻れない！");
        return;
    }
    player.location -= 50;
    updateBackground(player.location);
});

document.getElementById("attack").addEventListener("click", () => {
    if (!currentEnemy) return;
    const damage = Math.max(1, player.attack - currentEnemy.defense);
    currentEnemy.hp -= damage;
    logMessage(`攻撃して敵に${damage}ダメージ！`);
    checkEnemyDefeat();
});

document.getElementById("skill").addEventListener("click", () => {
    if (!currentEnemy) return;
    showSkillOptions();
});

document.getElementById("item").addEventListener("click", () => {
    showItemOptions();
});

export function useSkill(skill) {
    if (!currentEnemy || player.mp < skill.mpCost) return;
    player.mp -= skill.mpCost;

    const damage = calculateSkillDamage(skill, currentEnemy);
    currentEnemy.hp -= damage;

    logMessage(`${skill.name} を使って敵に${damage}ダメージ！（属性: ${skill.element}）`);
    checkEnemyDefeat();
}

function calculateSkillDamage(skill, enemy) {
    if (skill.element === enemy.weakness) return skill.power;
    if (enemy.resistances && enemy.resistances.includes(skill.element)) return Math.floor(skill.power / 2);
    return 10;
}

function checkEnemyDefeat() {
    if (currentEnemy.hp <= 0) {
        logMessage("敵を倒した！");
        setCurrentEnemy(null);
    }
}
