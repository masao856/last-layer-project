const baseWeapons = [
  {
    "id": "short_sword",
    "name": "ショートソード",
    "type": "片手",
    "power": 5,
    "effects": [],
    "rarity": "common"
  },
  {
    "id": "long_sword",
    "name": "ロングソード",
    "type": "片手",
    "power": 6,
    "effects": [],
    "rarity": "common"
  },
  {
    "id": "dagger",
    "name": "ダガー",
    "type": "片手",
    "power": 4,
    "effects": [],
    "rarity": "common"
  },
  {
    "id": "stiletto",
    "name": "スティレット",
    "type": "片手",
    "power": 4,
    "effects": [
      {
        "type": "statBoost",
        "target": "speed",
        "value": 1
      }
    ],
    "rarity": "uncommon"
  },
  {
    "id": "iron_mace",
    "name": "鉄製メイス",
    "type": "片手",
    "power": 5,
    "effects": [
      {
        "type": "statusEffect",
        "value": "スタン"
      }
    ],
    "rarity": "common"
  },
  {
    "id": "steel_claw",
    "name": "鋼のクロー",
    "type": "片手",
    "power": 4,
    "effects": [
      {
        "type": "multiHit",
        "value": true
      }
    ],
    "rarity": "uncommon"
  },
  {
    "id": "bastard_sword",
    "name": "バスタードソード",
    "type": "両手",
    "power": 8,
    "effects": [],
    "rarity": "common"
  },
  {
    "id": "halberd",
    "name": "ハルバード",
    "type": "両手",
    "power": 9,
    "effects": [],
    "rarity": "common"
  },
  {
    "id": "great_axe",
    "name": "グレートアックス",
    "type": "両手",
    "power": 10,
    "effects": [],
    "rarity": "uncommon"
  },
  {
    "id": "war_hammer",
    "name": "ウォーハンマー",
    "type": "両手",
    "power": 8,
    "effects": [
      {
        "type": "ignoreDefense",
        "value": true
      }
    ],
    "rarity": "uncommon"
  },
  {
    "id": "katana",
    "name": "刀",
    "type": "両手",
    "power": 7,
    "effects": [
      {
        "type": "critRate",
        "value": 2
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "black_iron_blade",
    "name": "黒鉄の大剣",
    "type": "両手",
    "power": 12,
    "effects": [
      {
        "type": "statBoost",
        "target": "speed",
        "value": -1
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "short_bow",
    "name": "ショートボウ",
    "type": "遠距離",
    "power": 5,
    "effects": [],
    "rarity": "common"
  },
  {
    "id": "crossbow",
    "name": "クロスボウ",
    "type": "遠距離",
    "power": 6,
    "effects": [],
    "rarity": "common"
  },
  {
    "id": "long_bow",
    "name": "長弓",
    "type": "遠距離",
    "power": 7,
    "effects": [],
    "rarity": "uncommon"
  },
  {
    "id": "fire_staff",
    "name": "火の杖",
    "type": "魔法",
    "power": 6,
    "element": "火",
    "effects": [],
    "grantsSkill": "ファイアボール",
    "rarity": "uncommon"
  },
  {
    "id": "ice_tome",
    "name": "氷の書",
    "type": "魔法",
    "power": 5,
    "effects": [
      {
        "type": "statusEffect",
        "value": "凍結"
      }
    ],
    "grantsSkill": "アイスランス",
    "rarity": "uncommon"
  },
  {
    "id": "thunder_rod",
    "name": "雷のロッド",
    "type": "魔法",
    "power": 6,
    "element": "雷",
    "effects": [
      {
        "type": "statusEffect",
        "value": "マヒ"
      }
    ],
    "grantsSkill": "サンダー",
    "rarity": "uncommon"
  },
  {
    "id": "tentacle_whip",
    "name": "触手の鞭",
    "type": "特殊",
    "power": 6,
    "effects": [
      {
        "type": "drainHP",
        "value": 0.2
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "cursed_blade",
    "name": "呪詛の刃",
    "type": "特殊",
    "power": 9,
    "effects": [
      {
        "type": "selfDamage",
        "value": 0.1
      }
    ],
    "rarity": "cursed"
  },
  {
    "id": "gun_device",
    "name": "銃型装置",
    "type": "特殊",
    "power": 7,
    "effects": [
      {
        "type": "accuracy",
        "value": 100
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "muramasa",
    "name": "村正",
    "type": "両手",
    "power": 24,
    "element": "火",
    "effects": [
      {
        "type": "aoe",
        "value": true
      },
      {
        "type": "critRate",
        "value": 100
      },
      {
        "type": "hpPenalty",
        "value": 0.3
      }
    ],
    "rarity": "legendary"
  },
  {
    "id": "sword_of_raijin",
    "name": "雷神の剣",
    "type": "片手",
    "power": 22,
    "element": "雷",
    "effects": [
      {
        "type": "statBoost",
        "target": "attack",
        "value": 5
      }
    ],
    "rarity": "legendary"
  },
  {
    "id": "gods_bane",
    "name": "神殺しの大剣",
    "type": "両手",
    "power": 30,
    "element": "無",
    "effects": [
      {
        "type": "statBoost",
        "target": "attack",
        "value": 10
      }
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
      {
        "type": "aoe",
        "value": true
      },
      {
        "type": "statBoost",
        "target": "defense",
        "value": 999
      },
      {
        "type": "regen",
        "target": "hp",
        "value": 50
      }
    ],
    "rarity": "debug",
    "unlockCondition": "ショップ購入順番イベント"
  }
];