// ProductsData.js

const agriProducts = [
  // 🍎 FRUITS (10)
  { id: 1, name: "Apple", category: "fruits", img: "/img/fruits/apple.png", price: 180 },
  { id: 2, name: "Banana", category: "fruits", img: "/img/fruits/banana.png", price: 60 },
  { id: 3, name: "Mango", category: "fruits", img: "/img/fruits/mango.png", price: 120 },
  { id: 4, name: "Orange", category: "fruits", img: "/img/fruits/orange.png", price: 90 },
  { id: 5, name: "Grapes", category: "fruits", img: "/img/fruits/grapes.png", price: 110 },
  { id: 6, name: "Papaya", category: "fruits", img: "/img/fruits/papaya.png", price: 50 },
  { id: 7, name: "Pineapple", category: "fruits", img: "/img/fruits/pineapple.png", price: 70 },
  { id: 8, name: "Guava", category: "fruits", img: "/img/fruits/guava.png", price: 80 },
  { id: 9, name: "Watermelon", category: "fruits", img: "/img/fruits/watermelon.png", price: 40 },
  { id: 10, name: "Muskmelon", category: "fruits", img: "/img/fruits/muskmelon.png", price: 45 },

  // 🥕 VEGETABLES (10)
  { id: 11, name: "Tomato", category: "vegetables", img: "/img/vegetables/tomato.png", price: 30 },
  { id: 12, name: "Potato", category: "vegetables", img: "/img/vegetables/potato.png", price: 25 },
  { id: 13, name: "Onion", category: "vegetables", img: "/img/vegetables/onion.png", price: 35 },
  { id: 14, name: "Carrot", category: "vegetables", img: "/img/vegetables/carrot.png", price: 40 },
  { id: 15, name: "Cabbage", category: "vegetables", img: "/img/vegetables/cabbage.png", price: 28 },
  { id: 16, name: "Cauliflower", category: "vegetables", img: "/img/vegetables/cauliflower.png", price: 32 },
  { id: 17, name: "Brinjal", category: "vegetables", img: "/img/vegetables/brinjal.png", price: 38 },
  { id: 18, name: "Lady Finger", category: "vegetables", img: "/img/vegetables/okra.png", price: 45 },
  { id: 19, name: "Pumpkin", category: "vegetables", img: "/img/vegetables/pumpkin.png", price: 20 },
  { id: 20, name: "Cucumber", category: "vegetables", img: "/img/vegetables/cucumber.png", price: 22 },

  // 🌱 SEEDS (10)
  { id: 21, name: "Rice Seeds", category: "seeds", img: "/img/seeds/rice.png", price: 120 },
  { id: 22, name: "Wheat Seeds", category: "seeds", img: "/img/seeds/wheat.png", price: 110 },
  { id: 23, name: "Maize Seeds", category: "seeds", img: "/img/seeds/maize.png", price: 100 },
  { id: 24, name: "Sunflower Seeds", category: "seeds", img: "/img/seeds/sunflower.png", price: 150 },
  { id: 25, name: "Groundnut Seeds", category: "seeds", img: "/img/seeds/groundnut.png", price: 140 },
  { id: 26, name: "Cotton Seeds", category: "seeds", img: "/img/seeds/cotton.png", price: 200 },
  { id: 27, name: "Mustard Seeds", category: "seeds", img: "/img/seeds/mustard.png", price: 90 },
  { id: 28, name: "Chilli Seeds", category: "seeds", img: "/img/seeds/chilli.png", price: 160 },
  { id: 29, name: "Tomato Seeds", category: "seeds", img: "/img/seeds/tomato.png", price: 170 },
  { id: 30, name: "Coriander Seeds", category: "seeds", img: "/img/seeds/coriander.png", price: 80 },

  // 💊 MEDICINES (10)
  { id: 31, name: "Neem Oil", category: "medicines", img: "/img/medicines/neem-oil.png", price: 250 },
  { id: 32, name: "Urea Fertilizer", category: "medicines", img: "/img/medicines/urea.png", price: 300 },
  { id: 33, name: "DAP Fertilizer", category: "medicines", img: "/img/medicines/dap.png", price: 350 },
  { id: 34, name: "Potash", category: "medicines", img: "/img/medicines/potash.png", price: 280 },
  { id: 35, name: "Bio Pesticide", category: "medicines", img: "/img/medicines/biopesticide.png", price: 220 },
  { id: 36, name: "Fungicide", category: "medicines", img: "/img/medicines/fungicide.png", price: 260 },
  { id: 37, name: "Insecticide", category: "medicines", img: "/img/medicines/insecticide.png", price: 270 },
  { id: 38, name: "Growth Booster", category: "medicines", img: "/img/medicines/booster.png", price: 240 },
  { id: 39, name: "Soil Conditioner", category: "medicines", img: "/img/medicines/soil.png", price: 290 },
  { id: 40, name: "Micronutrient Mix", category: "medicines", img: "/img/medicines/micro.png", price: 310 },

  // 🍃 LEAFS (10)
  { id: 41, name: "Spinach", category: "leafs", img: "/img/leafs/spinach.png", price: 20 },
  { id: 42, name: "Mint Leaves", category: "leafs", img: "/img/leafs/mint.png", price: 15 },
  { id: 43, name: "Coriander Leaves", category: "leafs", img: "/img/leafs/coriander.png", price: 18 },
  { id: 44, name: "Curry Leaves", category: "leafs", img: "/img/leafs/curry.png", price: 12 },
  { id: 45, name: "Fenugreek Leaves", category: "leafs", img: "/img/leafs/fenugreek.png", price: 16 },
  { id: 46, name: "Drumstick Leaves", category: "leafs", img: "/img/leafs/drumstick.png", price: 22 },
  { id: 47, name: "Amaranthus", category: "leafs", img: "/img/leafs/amaranthus.png", price: 19 },
  { id: 48, name: "Lettuce", category: "leafs", img: "/img/leafs/lettuce.png", price: 25 },
  { id: 49, name: "Basel Leaves", category: "leafs", img: "/img/leafs/basel.png", price: 30 },
  { id: 50, name: "Taro Leaves", category: "leafs", img: "/img/leafs/taro.png", price: 28 },
];

export default agriProducts;


export const productPriceHistory = [
  {
    name: "Apple",
    prices: [
      { date: "2026-01-01", price: 180 },
      { date: "2026-01-02", price: 185 },
      { date: "2026-01-03", price: 175 },
      { date: "2026-01-04", price: 190 },
    ],
  },
  {
    name: "Banana",
    prices: [
      { date: "2026-01-01", price: 60 },
      { date: "2026-01-02", price: 58 },
      { date: "2026-01-03", price: 62 },
      { date: "2026-01-04", price: 65 },
    ],
  },
];
