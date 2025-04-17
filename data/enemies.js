const enemies = [
  {
    "id": "shadow",
    "name": "影",
    "layer": 1,
    "hp": 70,
    "atk": 20,
    "def": 10,
    "type": "霊体",
    "element": "dark",
    "image": "shadow.png",
    "skills": [
      "シャドウボルト"
    ],
    "drops": [
      {
        "item": "MPポーション",
        "rate": 0.2
      }
    ]
  },
  {
    "id": "bandit",
    "name": "野盗",
    "layer": 1,
    "hp": 60,
    "atk": 22,
    "def": 8,
    "type": "人間",
    "element": "null",
    "image": "bandit.png",
    "skills": [],
    "drops": [
      {
        "item": "食糧",
        "rate": 0.2
      },
      {
        "item": "ポーション",
        "rate": 0.3
      }
    ]
  },
  {
    "id": "beastman_bandit",
    "name": "獣人の野盗",
    "layer": 1,
    "hp": 85,
    "atk": 25,
    "def": 12,
    "type": "獣人",
    "element": "null",
    "image": "beastman_bandit.png",
    "skills": [],
    "drops": [
      {
        "item": "食糧",
        "rate": 0.25
      }
    ]
  },
  {
    "id": "zombie",
    "name": "ゾンビ",
    "layer": 1,
    "hp": 90,
    "atk": 18,
    "def": 10,
    "type": "アンデッド",
    "element": "poison",
    "image": "zombie.png",
    "skills": [
      "ポイズン"
    ],
    "drops": [
      {
        "item": "朽ちた布",
        "rate": 0.3
      }
    ]
  },
  {
    "id": "gravekeeper_wraith",
    "name": "墓守の怨霊",
    "layer": 2,
    "hp": 400,
    "atk": 65,
    "def": 30,
    "type": "怨霊ボス",
    "element": "dark",
    "image": "gravekeeper_wraith.png",
    "isBoss": true,
    "skills": [
      "シャドウボルト",
      "ドレイン",
      "ファイアボール"
    ],
    "drops": [
      {
        "item": "怨霊の斧",
        "rate": 0.1
      },
      {
        "item": "MPポーション",
        "rate": 0.5
      }
    ]
  },
  {
    "id": "cursed_armor_screaming",
    "name": "呪われた叫びの鎧",
    "layer": 2,
    "hp": 260,
    "atk": 48,
    "def": 28,
    "type": "呪鎧・中ボス",
    "element": "dark",
    "image": "cursed_armor_screaming.png",
    "isMidBoss": true,
    "skills": [
      "シャドウボルト",
      "咆哮"
    ],
    "drops": [
      {
        "item": "呪いの破片",
        "rate": 0.2
      },
      {
        "item": "ポーション",
        "rate": 0.4
      }
    ]
  },
  {
    "id": "ghost_grave_robber",
    "name": "墓泥棒の亡霊",
    "layer": 2,
    "hp": 100,
    "atk": 25,
    "def": 12,
    "type": "霊体",
    "element": "null",
    "image": "ghost_grave_robber.png",
    "skills": [],
    "drops": [
      {
        "item": "ポーション",
        "rate": 0.3
      }
    ]
  },
  {
    "id": "enemy_mummy",
    "name": "古代のミイラ",
    "layer": 2,
    "hp": 130,
    "atk": 32,
    "def": 16,
    "type": "アンデッド",
    "element": "null",
    "image": "enemy_mummy.png",
    "skills": [],
    "drops": [
      {
        "item": "乾いた包帯",
        "rate": 0.4
      }
    ]
  },
  {
    "id": "enemy_floating_soul",
    "name": "彷徨う魂",
    "layer": 2,
    "hp": 90,
    "atk": 24,
    "def": 10,
    "type": "霊体",
    "element": "dark",
    "image": "enemy_floating_soul.png",
    "skills": [
      "ドレイン"
    ],
    "drops": [
      {
        "item": "MPポーション",
        "rate": 0.2
      }
    ]
  },
  {
    "id": "cursed_shadow",
    "name": "呪影",
    "layer": 2,
    "hp": 110,
    "atk": 30,
    "def": 14,
    "type": "呪霊",
    "element": "dark",
    "image": "cursed_shadow.png",
    "skills": [
      "シャドウボルト"
    ],
    "drops": [
      {
        "item": "呪いの粉",
        "rate": 0.25
      }
    ]
  },
  {
    "id": "skeleton_soldier",
    "name": "スケルトンソルジャー",
    "layer": 2,
    "hp": 120,
    "atk": 35,
    "def": 18,
    "type": "アンデッド",
    "element": "null",
    "image": "skeleton_soldier.png",
    "skills": [],
    "drops": [
      {
        "item": "骨のかけら",
        "rate": 0.3
      }
    ]
  },
  {
    "id": "sand_snake",
    "name": "サンドスネーク",
    "layer": 3,
    "hp": 160,
    "atk": 38,
    "def": 20,
    "type": "魔獣",
    "element": "poison",
    "image": "sand_snake.png",
    "skills": [
      "ポイズン"
    ],
    "drops": [
      {
        "item": "毒の牙",
        "rate": 0.3
      }
    ]
  },
  {
    "id": "sunamiri_no_mouja",
    "name": "砂霧の亡者",
    "layer": 3,
    "hp": 190,
    "atk": 42,
    "def": 22,
    "type": "アンデッド戦士",
    "element": "null",
    "image": "sunamiri_no_mouja.png",
    "skills": [],
    "drops": [
      {
        "item": "サビた剣",
        "rate": 0.2
      }
    ]
  },
  {
    "id": "iseki_no_saikutsusha",
    "name": "遺跡の採掘者",
    "layer": 3,
    "hp": 150,
    "atk": 45,
    "def": 15,
    "type": "人間",
    "element": "null",
    "image": "iseki_no_saikutsusha.png",
    "skills": [
      "クロスボウショット"
    ],
    "drops": [
      {
        "item": "食糧",
        "rate": 0.2
      },
      {
        "item": "クロスボウ",
        "rate": 0.1
      }
    ]
  },
  {
    "id": "lizardman_sand",
    "name": "熱砂のリザードマン",
    "layer": 3,
    "hp": 200,
    "atk": 50,
    "def": 25,
    "type": "爬虫人",
    "element": "fire",
    "image": "lizardman_sand.png",
    "skills": [
      "ファイアボール"
    ],
    "drops": [
      {
        "item": "リザードの皮",
        "rate": 0.4
      }
    ]
  },
  {
    "id": "karakara_mummy",
    "name": "カラカラミイラ",
    "layer": 3,
    "hp": 180,
    "atk": 40,
    "def": 24,
    "type": "アンデッド",
    "element": "null",
    "image": "karakara_mummy.png",
    "skills": [
      "乾きの呪い"
    ],
    "drops": [
      {
        "item": "乾いた包帯",
        "rate": 0.4
      }
    ]
  },
  {
    "id": "sajin_no_majutsushi",
    "name": "砂塵の魔術師",
    "layer": 3,
    "hp": 280,
    "atk": 55,
    "def": 26,
    "type": "中ボス・魔術師",
    "element": "fire",
    "image": "sajin_no_majutsushi.png",
    "isMidBoss": true,
    "skills": [
      "ファイアボール",
      "サンダー",
      "シャドウボルト"
    ],
    "drops": [
      {
        "item": "魔術師のローブ",
        "rate": 0.1
      },
      {
        "item": "MPポーション",
        "rate": 0.5
      }
    ]
  },
  {
    "id": "zanadu",
    "name": "幻王ザナドゥ",
    "layer": 3,
    "hp": 500,
    "atk": 70,
    "def": 35,
    "type": "ボス・魔王",
    "element": "fire",
    "image": "zanadu.png",
    "isBoss": true,
    "skills": [
      "ファイアボール",
      "ヒール",
      "ドレイン",
      "サンダー",
      "ポイズン"
    ],
    "drops": [
      {
        "item": "ザナドゥの宝珠",
        "rate": 0.05
      },
      {
        "item": "魔王のマント",
        "rate": 0.1
      },
      {
        "item": "エーテル",
        "rate": 0.5
      }
    ]
  }
];