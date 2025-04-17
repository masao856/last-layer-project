const enemySpawnTable = {
  "layer1": {
    "range": [
      0,
      1000
    ],
    "normal": [
      "slime.png",
      "zombie.png",
      "bandit.png",
      "rotted_rat.png",
      "shadow.png",
      "skeleton_soldier.png"
    ],
    "midboss": {
      "distance": 500,
      "image": "fallen_king.png",
      "name": "フォールン・キング"
    },
    "boss": {
      "distance": 1000,
      "image": "armor_knight.png",
      "name": "黒鉄の鎧"
    }
  },
  "layer2": {
    "range": [
      1000,
      1500
    ],
    "normal": [
      "enemy_mummy.png",
      "ghost_grave_robber.png",
      "skeleton_soldier.png",
      "enemy_floating_soul.png",
      "cursed_shadow.png",
      "cursed_armor_screaming.png"
    ],
    "midboss": {
      "distance": 1250,
      "image": "cursed_armor_screaming.png",
      "name": "叫びの鎧"
    },
    "boss": {
      "distance": 1500,
      "image": "gravekeeper_wraith.png",
      "name": "墓守の怨霊"
    }
  },
  "layer3": {
    "range": [
      1500,
      4500
    ],
    "normal": [
      "sunamiri_no_mouja.png",
      "lizardman_sand.png",
      "sand_snake.png",
      "isekai_no_saikutsusha.png",
      "zanadu_minion.png",
      "enemy_mummy.png"
    ],
    "midboss": {
      "distance": 3000,
      "image": "cursed_shadow.png",
      "name": "砂塵の魔術師"
    },
    "boss": {
      "distance": 4500,
      "image": "zanadu.png",
      "name": "幻王ザナドゥ"
    }
  }
};