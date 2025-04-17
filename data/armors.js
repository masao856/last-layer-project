const armors = [
  {
    "id": "armor_black_iron",
    "name": "黒鉄の鎧",
    "defense": 15,
    "effects": [
      {
        "type": "resist",
        "target": "physical",
        "value": 10
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "armor_bandage_mummy",
    "name": "ミイラの包帯鎧",
    "defense": 10,
    "effects": [
      {
        "type": "immune",
        "target": "poison"
      }
    ],
    "rarity": "uncommon"
  },
  {
    "id": "armor_robe_sandstorm",
    "name": "砂よけのローブ",
    "defense": 6,
    "effects": [
      {
        "type": "resist",
        "target": "fire",
        "value": 10
      },
      {
        "type": "resist",
        "target": "wind",
        "value": 10
      },
      {
        "type": "statBoost",
        "target": "speed",
        "value": 2
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "armor_cultist",
    "name": "狂信者の法衣",
    "defense": 3,
    "effects": [
      {
        "type": "statBoost",
        "target": "magicAttack",
        "value": 5
      },
      {
        "type": "statBoost",
        "target": "maxHp",
        "value": -10
      }
    ],
    "rarity": "uncommon"
  },
  {
    "id": "armor_knight_broken",
    "name": "朽ちた騎士の鎧",
    "defense": 12,
    "effects": [
      {
        "type": "resist",
        "target": "dark",
        "value": 15
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "armor_steel",
    "name": "鋼鉄の鎧",
    "defense": 12,
    "effects": [
      {
        "type": "resist",
        "target": "physical",
        "value": 5
      }
    ],
    "rarity": "common"
  },
  {
    "id": "armor_silver",
    "name": "白銀の鎧",
    "defense": 16,
    "effects": [
      {
        "type": "resist",
        "target": "light",
        "value": 10
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "armor_black",
    "name": "漆黒の鎧",
    "defense": 18,
    "effects": [
      {
        "type": "resist",
        "target": "dark",
        "value": 10
      }
    ],
    "rarity": "rare"
  },
  {
    "id": "armor_dragoon",
    "name": "龍騎士の鎧",
    "defense": 22,
    "effects": [
      {
        "type": "resist",
        "target": "fire",
        "value": 15
      }
    ],
    "rarity": "epic"
  },
  {
    "id": "armor_paladin",
    "name": "聖騎士の鎧",
    "defense": 25,
    "effects": [
      {
        "type": "resist",
        "target": "light",
        "value": 20
      },
      {
        "type": "regen",
        "target": "hp",
        "value": 5
      }
    ],
    "rarity": "legendary"
  },
  {
    "id": "armor_blood_curse",
    "name": "血塗れの鎧",
    "defense": 20,
    "effects": [
      {
        "type": "statBoost",
        "target": "attack",
        "value": 10
      },
      {
        "type": "statBoost",
        "target": "maxHp",
        "value": -20
      }
    ],
    "rarity": "cursed"
  }
];