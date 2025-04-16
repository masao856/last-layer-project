
export const player = {
  location: 0,
  hp: 20,
  maxHp: 20,
  mp: 10,
  maxMp: 10,
  skills: ["ファイアボール", "ヒール", "サンダー", "ウォータースピア", "シャドウボルト", "ポイズン"]
};

export let currentEnemy = null;

export function setCurrentEnemy(enemy) {
  currentEnemy = enemy;
}
