export const baseWeapons = [
  { name: "ショートソード", type: "片手", power: 5 },
  { name: "ロングソード", type: "片手", power: 6 },
  { name: "ダガー", type: "片手", power: 4 },
  { name: "スティレット", type: "片手", power: 4, speed: 1 },
  { name: "鉄製メイス", type: "片手", power: 5, effect: "スタン" },
  { name: "鋼のクロー", type: "片手", power: 4, effect: "連撃" },
  { name: "バスタードソード", type: "両手", power: 8 },
  { name: "ハルバード", type: "両手", power: 9 },
  { name: "グレートアックス", type: "両手", power: 10 },
  { name: "ウォーハンマー", type: "両手", power: 8, effect: "防御無視" },
  { name: "刀", type: "両手", power: 7, crit: 2 },
  { name: "黒鉄の大剣", type: "両手", power: 12, speed: -1 },
  { name: "ショートボウ", type: "遠距離", power: 5 },
  { name: "クロスボウ", type: "遠距離", power: 6 },
  { name: "長弓", type: "遠距離", power: 7 },
  { name: "火の杖", type: "魔法", power: 6, element: "火" },
  { name: "氷の書", type: "魔法", power: 5, effect: "凍結" },
  { name: "雷のロッド", type: "魔法", power: 6, element: "雷", effect: "マヒ" },
  { name: "触手の鞭", type: "特殊", power: 6, effect: "吸収" },
  { name: "呪詛の刃", type: "特殊", power: 9, effect: "自傷" },
  { name: "銃型装置", type: "特殊", power: 7, accuracy: 100 }
];

export function generateEnhancedWeapon(baseWeapon) {
  const effects = [
    { label: "攻撃力1.5倍", powerMult: 1.5 },
    { label: "HP吸収", effect: "吸収" },
    { label: "MP吸収", effect: "吸魔" },
    { label: "属性2つ", element: "火+雷" },
    { label: "ランダム属性", element: randomElement() }
  ];
  const chosen = effects[Math.floor(Math.random() * effects.length)];
  const newWeapon = { ...baseWeapon, name: `強化${baseWeapon.name}` };

  if (chosen.powerMult) newWeapon.power = Math.floor(baseWeapon.power * chosen.powerMult);
  if (chosen.effect) newWeapon.effect = chosen.effect;
  if (chosen.element) newWeapon.element = chosen.element;

  return newWeapon;
}

function randomElement() {
  const elements = ["火", "水", "雷", "光", "闇"];
  return elements[Math.floor(Math.random() * elements.length)];
}
