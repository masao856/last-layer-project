const baseWeapons = [
  {
    "id": "short_sword",
    "name": "ショートソード",
    "type": "片手",
    "power": 5,
    "effects": []
  },
  {
    "id": "long_sword",
    "name": "ロングソード",
    "type": "片手",
    "power": 6,
    "effects": []
  },
  {
    "id": "dagger",
    "name": "ダガー",
    "type": "片手",
    "power": 4,
    "effects": []
  },
  {
    "id": "stiletto",
    "name": "スティレット",
    "type": "片手",
    "power": 4,
    "effects": [
      "素早さ+1"
    ]
  },
  {
    "id": "iron_mace",
    "name": "鉄製メイス",
    "type": "片手",
    "power": 5,
    "effects": [
      "スタン"
    ]
  },
  {
    "id": "steel_claw",
    "name": "鋼のクロー",
    "type": "片手",
    "power": 4,
    "effects": [
      "連撃"
    ]
  },
  {
    "id": "bastard_sword",
    "name": "バスタードソード",
    "type": "両手",
    "power": 8,
    "effects": []
  },
  {
    "id": "halberd",
    "name": "ハルバード",
    "type": "両手",
    "power": 9,
    "effects": []
  },
  {
    "id": "great_axe",
    "name": "グレートアックス",
    "type": "両手",
    "power": 10,
    "effects": []
  },
  {
    "id": "war_hammer",
    "name": "ウォーハンマー",
    "type": "両手",
    "power": 8,
    "effects": [
      "防御無視"
    ]
  },
  {
    "id": "katana",
    "name": "刀",
    "type": "両手",
    "power": 7,
    "effects": [
      "クリティカル率+2"
    ]
  },
  {
    "id": "black_iron_blade",
    "name": "黒鉄の大剣",
    "type": "両手",
    "power": 12,
    "effects": [
      "素早さ-1"
    ]
  },
  {
    "id": "short_bow",
    "name": "ショートボウ",
    "type": "遠距離",
    "power": 5,
    "effects": []
  },
  {
    "id": "crossbow",
    "name": "クロスボウ",
    "type": "遠距離",
    "power": 6,
    "effects": []
  },
  {
    "id": "long_bow",
    "name": "長弓",
    "type": "遠距離",
    "power": 7,
    "effects": []
  },
  {
    "id": "fire_staff",
    "name": "火の杖",
    "type": "魔法",
    "power": 6,
    "element": "火",
    "effects": [],
    "grantsSkill": "ファイアボール"
  },
  {
    "id": "ice_tome",
    "name": "氷の書",
    "type": "魔法",
    "power": 5,
    "effects": [
      "凍結"
    ],
    "grantsSkill": "アイスランス"
  },
  {
    "id": "thunder_rod",
    "name": "雷のロッド",
    "type": "魔法",
    "power": 6,
    "element": "雷",
    "effects": [
      "マヒ"
    ],
    "grantsSkill": "サンダー"
  },
  {
    "id": "tentacle_whip",
    "name": "触手の鞭",
    "type": "特殊",
    "power": 6,
    "effects": [
      "吸収"
    ]
  },
  {
    "id": "cursed_blade",
    "name": "呪詛の刃",
    "type": "特殊",
    "power": 9,
    "effects": [
      "自傷"
    ]
  },
  {
    "id": "gun_device",
    "name": "銃型装置",
    "type": "特殊",
    "power": 7,
    "accuracy": 100,
    "effects": []
  },
  {
    "id": "muramasa",
    "name": "村正",
    "type": "両手",
    "power": 24,
    "effects": [
      "全体攻撃",
      "クリティカル率100%",
      "毎ターンHP30%ダメージ"
    ],
    "element": "火",
    "rarity": "legendary"
  },
  {
    "id": "sword_of_raijin",
    "name": "雷神の剣",
    "type": "片手",
    "power": 22,
    "element": "雷",
    "effects": [
      "高火力"
    ],
    "rarity": "legendary"
  },
  {
    "id": "gods_bane",
    "name": "神殺しの大剣",
    "type": "両手",
    "power": 30,
    "element": "null",
    "effects": [
      "超高火力"
    ],
    "rarity": "epic"
  },
  {
    "id": "dark_sword_debug",
    "name": "闇の剣",
    "type": "両手",
    "power": 999,
    "element": "闇",
    "effects": [
      "全体攻撃",
      "防御+999",
      "毎ターンHP50回復"
    ],
    "rarity": "debug",
    "unlockCondition": "ショップ購入順番イベント"
  }
];