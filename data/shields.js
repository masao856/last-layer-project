const shields = [
  {
    "id": "iron_shield",
    "name": "アイアンシールド",
    "defense": 8,
    "effects": [],
    "rarity": "common"
  },
  {
    "id": "mirror_shield",
    "name": "鏡の盾",
    "defense": 6,
    "effects": [
      {
        "type": "reflect",
        "target": "dark",
        "chance": 20
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "dragon_emblem_shield",
    "name": "龍の紋章盾",
    "defense": 10,
    "effects": [
      {
        "type": "resist",
        "target": "fire",
        "value": 10
      },
      {
        "type": "resist",
        "target": "lightning",
        "value": 10
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "rusted_shield",
    "name": "錆びた盾",
    "defense": 4,
    "effects": [
      {
        "type": "immune",
        "target": "debuff",
        "chance": 20
      }
    ],
    "rarity": "uncommon"
  },
  {
    "id": "guardian_shield",
    "name": "遺跡の守護盾",
    "defense": 9,
    "effects": [
      {
        "type": "statBoost",
        "target": "maxMp",
        "value": 10
      },
      {
        "type": "statBoost",
        "target": "magicDefense",
        "value": 5
      }
    ],
    "rarity": "epic"
  }
];