const fragrances = [
  {
    "brand": "Armaf",
    "name": "Club de Nuit Intense Man",
    "season": [
      {
        "name": "Winter",
        "status": "ok"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Apple, Bergamot, Blackcurrant, Pineapple, Lemon",
    "middle": "Rose, Birch, Jasmine",
    "base": "Musk, Ambergris, Patchouli, Vanilla",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.34696.avif"
  },
  {
    "brand": "Lattafa",
    "name": "Asad - Bourbon",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "bad"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Lavender, Mirabelle, Pink Pepper",
    "middle": "Cacao, Nutmeg, Davana",
    "base": "Bourbon Vanilla, Amber, Vetiver",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.101124.avif"
  },
  {
    "brand": "Lattafa",
    "name": "Asad - Elixir",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "bad"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Pink Pepper, Saffron, Grapefruit",
    "middle": "Tobacco, Vanilla, Cedar",
    "base": "Frankincense, Light Amber, Patchouli, Cashmeran",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.117616.avif"
  },
  {
    "brand": "Lattafa",
    "name": "Asad",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "ok"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Black Pepper, Tobacco, Pineapple",
    "middle": "Patchouli, Coffee, Iris",
    "base": "Vanilla, Amber, Dry Wood, Benzoin, Labdanum",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.72821.avif"
  },
  {
    "brand": "Lattafa",
    "name": "Bade'e Al Oud for Glory",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "ok"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Saffron, Nutmeg, Lavendar",
    "middle": "Agarwood (oud), Patchouli",
    "base": "Agarwood (oud), Patchouli, Musk",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.64948.avif"
  },
  {
    "brand": "French Avenue",
    "name": "Vulcan - Feu",
    "season": [
      {
        "name": "Winter",
        "status": "bad"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "bad"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "bad"
      }
    ],
    "top": "Mango, Lemon, Ginger, Rhubarb",
    "middle": "Pink Pepper, Jasmine, Violet, Praline",
    "base": "Tonka Bean, Cedarwood, Ambergris, Moss",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.105520.avif"
  },
  {
    "brand": "French Avenue",
    "name": "Liquid Brun - Limited Edition",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "bad"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Cardamom, Lavender, Citrus",
    "middle": "Orange Blossom, Guaiac Wood, Rose",
    "base": "Vanilla, Amber, Tonka, Oak Moss",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.123526.avif"
  },
  {
    "brand": "Afnan",
    "name": "Supremacy Collector's Edition",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Pineapple, Bergamot, White Flowers, Apple",
    "middle": "Orange Blossom, Birch, Amber",
    "base": "Oak Moss, Musk, Ambergris",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.98689.avif"
  },
  {
    "brand": "Afnan",
    "name": "9pm",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "ok"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Apple, Cinnamon, Wild Lavender, Bergamot",
    "middle": "Orange Blossom, Lily-of-the-Valley",
    "base": "Vanilla, Tonka Bean, Amber, Patchouli",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.65414.avif"
  },
  {
    "brand": "Maison Alhambra",
    "name": "So Candid",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "ok"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Mandarin Orange, Clary Sage",
    "middle": "Caramel, Tonka Bean",
    "base": "Vetiver",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.100487.avif"
  },
  {
    "brand": "Bad Boy",
    "name": "Men Elixir",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "ok"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Sage, Lavender",
    "middle": "Leather, Iris",
    "base": "Cedar, Frankincense",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.101597.avif"
  },
  {
    "brand": "Valentino",
    "name": "Uomo Born in Roma Intense",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Vanilla",
    "middle": "Lavender",
    "base": "Vetiver",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.78740.avif"
  },
  {
    "brand": "Valentino",
    "name": "Uomo Intense",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "bad"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Mandarin Orange, Clary Sage",
    "middle": "Iris, Tonka Bean",
    "base": "Vanilla, Leather",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.38254.avif"
  },
  {
    "brand": "YSL",
    "name": "Myslf",
    "season": [
      {
        "name": "Winter",
        "status": "ok"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "ok"
      }
    ],
    "top": "Calabrian Bergamot, Bergamot",
    "middle": "Tunisian Orange Blossom",
    "base": "Ambrofix, Patchouli",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.84094.avif"
  },
  {
    "brand": "YSL",
    "name": "L'Homme",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "ok"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Bitter Orange, Bergamot",
    "middle": "Lavender, Geranium",
    "base": "Coganc, Oak, Cedar, Vetiver",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.72727.avif"
  },
  {
    "brand": "Montblanc",
    "name": "Legend Red",
    "season": [
      {
        "name": "Winter",
        "status": "bad"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "ok"
      }
    ],
    "top": "Blood Orange, Grapefruit, Cardamom",
    "middle": "Cedar, Clary Sage, Juniper Berries",
    "base": "Atlas Cedar, Mahogany, Tonka Bean",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.71652.avif"
  },
  {
    "brand": "Prada",
    "name": "Luna Rossa",
    "season": [
      {
        "name": "Winter",
        "status": "bad"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "ok"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "bad"
      }
    ],
    "top": "Lavender, Bitter Orange",
    "middle": "Mint, Clary Sage",
    "base": "Ambrette, Ambroxan",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.15754.avif"
  },
  {
    "brand": "Lacoste",
    "name": "Essential",
    "season": [
      {
        "name": "Winter",
        "status": "bad"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "bad"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "bad"
      }
    ],
    "top": "Bergamot, Cassia, Tomato Leaf, Tangerine",
    "middle": "Rose, Pepper",
    "base": "Sandalwood, Patchouli",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.787.avif"
  },
  {
    "brand": "Diesel",
    "name": "Only the Brave",
    "season": [
      {
        "name": "Winter",
        "status": "bad"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "ok"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "ok"
      }
    ],
    "top": "Amalfi Lemon, Mandarin Orange",
    "middle": "Violet, Virginia Cedar, Coriander",
    "base": "Amber, Leather, Benzoin, French Labdanum, Styrax",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.5532.avif"
  },
  {
    "brand": "Nautica",
    "name": "Life",
    "season": [
      {
        "name": "Winter",
        "status": "bad"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "bad"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "bad"
      }
    ],
    "top": "Sea Salt, Ginger, Sage",
    "middle": "Violet, Lavender",
    "base": "Hinoki, Moss",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.26057.avif"
  },
  {
    "brand": "Nautica",
    "name": "Voyage",
    "season": [
      {
        "name": "Winter",
        "status": "bad"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "bad"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "bad"
      }
    ],
    "top": "Green Leaves, Apple",
    "middle": "Lotus, Mimosa",
    "base": "Musk, Cedar, Oakmoss, Amber",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.913.avif"
  },
  {
    "brand": "Givenchy",
    "name": "Pi",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "ok"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Mandarin Orange, Tarragon, Rosemary, Basil",
    "middle": "Anise, Neroli, Geranium, Lily-of-the-Valley",
    "base": "Vanilla, Almond, Tonka Bean, Benzoin, Cedar",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.39.avif"
  },
  {
    "brand": "Bad Boy",
    "name": "Men",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "ok"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "ok"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "White Pepper, Bergamot, Pink Pepper",
    "middle": "Cedarwood, Clary Sage",
    "base": "Tonka Bean, Cacao",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.55449.avif"
  },
  {
    "brand": "Viktor & Rolf",
    "name": "Spicebomb Extreme",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "bad"
      },
      {
        "name": "Summer",
        "status": "bad"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Vanilla, Tobacco",
    "middle": "Cinnamon, Cumin",
    "base": "Bourbon Whiskey, Saffron",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.30499.avif"
  },
  {
    "brand": "Azzaro",
    "name": "Wanted",
    "season": [
      {
        "name": "Winter",
        "status": "good"
      },
      {
        "name": "Spring",
        "status": "good"
      },
      {
        "name": "Summer",
        "status": "good"
      },
      {
        "name": "Fall",
        "status": "good"
      }
    ],
    "time": [
      {
        "name": "Day",
        "status": "good"
      },
      {
        "name": "Night",
        "status": "good"
      }
    ],
    "top": "Lemon, Ginger, Lavender, Mint",
    "middle": "Apple, Guatemalan Cardamom, Juniper, Geranium",
    "base": "Tonka Bean, Amberwood, Haitian Vetiver",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.38686.avif"
  }
];