const enemies = [
  {
    "id": "shadow",
    "name": "影",
    "hp": 40,
    "attack": 8,
    "skills": [],
    "aiType": "aggressive"
  },
  {
    "id": "bandit",
    "name": "野盗",
    "hp": 50,
    "attack": 10,
    "skills": [
      "ポイズン"
    ],
    "aiType": "tricky"
  },
  {
    "id": "beastman_bandit",
    "name": "獣人の野盗",
    "hp": 60,
    "attack": 12,
    "skills": [
      "ファイアボール"
    ],
    "aiType": "caster"
  },
  {
    "id": "zombie",
    "name": "ゾンビ",
    "hp": 70,
    "attack": 9,
    "skills": [],
    "aiType": "aggressive"
  },
  {
    "id": "armor_knight",
    "name": "黒鉄の鎧",
    "hp": 120,
    "attack": 14,
    "skills": [
      "ダークネスウェーブ"
    ],
    "aiType": "defensive"
  },
  {
    "id": "fallen_king",
    "name": "堕ちた王",
    "hp": 200,
    "attack": 20,
    "skills": [
      "ダークネスウェーブ",
      "ポイズン"
    ],
    "aiType": "boss_pattern1"
  },
  {
    "id": "gravekeeper_wraith",
    "name": "墓守の怨霊",
    "hp": 180,
    "attack": 18,
    "skills": [
      "ダークネスウェーブ"
    ],
    "aiType": "boss_pattern1"
  },
  {
    "id": "cursed_armor_screaming",
    "name": "叫びの鎧",
    "hp": 120,
    "attack": 16,
    "skills": [
      "ファイアボール"
    ],
    "aiType": "defensive"
  },
  {
    "id": "ghost_grave_robber",
    "name": "幽霊盗掘者",
    "hp": 60,
    "attack": 9,
    "skills": [
      "ポイズン"
    ],
    "aiType": "tricky"
  },
  {
    "id": "enemy_mummy",
    "name": "古代ミイラ",
    "hp": 80,
    "attack": 10,
    "skills": [],
    "aiType": "aggressive"
  },
  {
    "id": "enemy_floating_soul",
    "name": "さまよう魂",
    "hp": 50,
    "attack": 7,
    "skills": [
      "シャドウボルト"
    ],
    "aiType": "caster"
  },
  {
    "id": "cursed_shadow",
    "name": "呪われし影",
    "hp": 55,
    "attack": 8,
    "skills": [
      "ポイズン"
    ],
    "aiType": "tricky"
  },
  {
    "id": "skeleton_soldier",
    "name": "スケルトン兵士",
    "hp": 65,
    "attack": 11,
    "skills": [],
    "aiType": "aggressive"
  },
  {
    "id": "sand_wraith",
    "name": "砂霧の亡者",
    "hp": 75,
    "attack": 11,
    "skills": [
      "ポイズン"
    ],
    "aiType": "tricky"
  },
  {
    "id": "ruin_raider",
    "name": "遺跡の採掘者",
    "hp": 85,
    "attack": 13,
    "skills": [
      "サンダー"
    ],
    "aiType": "caster"
  },
  {
    "id": "sand_lizardman",
    "name": "熱砂のリザードマン",
    "hp": 90,
    "attack": 14,
    "skills": [],
    "aiType": "aggressive"
  },
  {
    "id": "dried_mummy",
    "name": "カラカラミイラ",
    "hp": 100,
    "attack": 12,
    "skills": [
      "ファイアボール"
    ],
    "aiType": "defensive"
  },
  {
    "id": "desert_phantom",
    "name": "砂塵の魔術師",
    "hp": 140,
    "attack": 16,
    "skills": [
      "シャドウボルト",
      "ダークネスウェーブ"
    ],
    "aiType": "boss_pattern1"
  },
  {
    "id": "zanadu_king",
    "name": "幻王ザナドゥ",
    "hp": 240,
    "attack": 22,
    "skills": [
      "ダークネスウェーブ",
      "ポイズン",
      "サンダーストーム"
    ],
    "aiType": "boss_pattern1"
  }
];