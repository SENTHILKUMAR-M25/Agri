// ProductsData.js

const commonSeller = {
  id: "TN-FARM-001",
  name: "R. Senthil Kumar",
  location: "Erode, Tamil Nadu",
  phone: "+91 9XXXXXXXXX",
  rating: 4.6,
  experience: "12 Years",
};

const seedSeller = {
  id: "TN-SEED-001",
  name: "Tamil Nadu Seed Corporation",
  location: "Coimbatore, Tamil Nadu",
  phone: "+91 8XXXXXXXXX",
  rating: 4.5,
  experience: "18 Years",
};

const medicineSeller = {
  id: "TN-AGRI-001",
  name: "GreenGrow Agri Store",
  location: "Salem, Tamil Nadu",
  phone: "+91 7XXXXXXXXX",
  rating: 4.8,
  experience: "15 Years",
};

const delivery = {
  type: "Farm to Market",
  duration: "2–4 Days",
  charges: "Free",
};

const agriProducts = [
  // 🍎 FRUITS (1–10)
  { id: 1, name: "Apple", category: "fruits", img: "/img/fruits/apple.png", price: 180, unit: "Quintal", stock: 120, organic: true, description: "Premium hill apples.", seller: commonSeller, delivery, priceHistory: [170,175,178,176,180,182,180]},
  { id: 2, name: "Banana", category: "fruits", img: "/img/fruits/banana.png", price: 60, unit: "Quintal", stock: 300, organic: true, description: "Naturally ripened bananas.", seller: commonSeller, delivery, priceHistory: [55,58,60,62,61,60,60]},
  { id: 3, name: "Mango", category: "fruits", img: "/img/fruits/mango.png", price: 120, unit: "Quintal", stock: 200, organic: true, description: "Sweet premium mangoes.", seller: commonSeller, delivery, priceHistory: [110,115,118,120,122,120,120]},
  { id: 4, name: "Orange", category: "fruits", img: "/img/fruits/orange.png", price: 90, unit: "Quintal", stock: 180, organic: false, description: "Vitamin-C rich oranges.", seller: commonSeller, delivery, priceHistory: [85,88,90,92,90,90,90]},
  { id: 5, name: "Grapes", category: "fruits", img: "/img/fruits/grapes.png", price: 110, unit: "Quintal", stock: 140, organic: true, description: "Seedless grapes.", seller: commonSeller, delivery, priceHistory: [100,105,108,110,112,110,110]},
  { id: 6, name: "Papaya", category: "fruits", img: "/img/fruits/papaya.png", price: 50, unit: "Quintal", stock: 220, organic: true, description: "Fresh farm papaya.", seller: commonSeller, delivery, priceHistory: [45,48,50,52,51,50,50]},
  { id: 7, name: "Pineapple", category: "fruits", img: "/img/fruits/pineapple.png", price: 70, unit: "Quintal", stock: 160, organic: false, description: "Juicy pineapples.", seller: commonSeller, delivery, priceHistory: [65,68,70,72,71,70,70]},
  { id: 8, name: "Guava", category: "fruits", img: "/img/fruits/guava.png", price: 80, unit: "Quintal", stock: 170, organic: true, description: "Fresh guava fruits.", seller: commonSeller, delivery, priceHistory: [75,78,80,82,81,80,80]},
  { id: 9, name: "Watermelon", category: "fruits", img: "/img/fruits/watermelon.png", price: 40, unit: "Quintal", stock: 260, organic: false, description: "Sweet watermelons.", seller: commonSeller, delivery, priceHistory: [35,38,40,42,41,40,40]},
  { id: 10, name: "Muskmelon", category: "fruits", img: "/img/fruits/muskmelon.png", price: 45, unit: "Quintal", stock: 210, organic: false, description: "Fresh seasonal melons.", seller: commonSeller, delivery, priceHistory: [40,43,45,47,46,45,45]},

  // 🥕 VEGETABLES (11–20)
  { id: 11, name: "Tomato", category: "vegetables", img: "/img/vegetables/tomato.png", price: 30, unit: "Quintal", stock: 500, organic: false, description: "Fresh red tomatoes.", seller: commonSeller, delivery, priceHistory: [25,28,30,32,31,30,30]},
  { id: 12, name: "Potato", category: "vegetables", img: "/img/vegetables/potato.png", price: 25, unit: "Quintal", stock: 600, organic: false, description: "Bulk potatoes.", seller: commonSeller, delivery, priceHistory: [22,24,25,26,25,25,25]},
  { id: 13, name: "Onion", category: "vegetables", img: "/img/vegetables/onion.png", price: 35, unit: "Quintal", stock: 450, organic: false, description: "Strong onions.", seller: commonSeller, delivery, priceHistory: [30,32,34,36,35,35,35]},
  { id: 14, name: "Carrot", category: "vegetables", img: "/img/vegetables/carrot.png", price: 40, unit: "Quintal", stock: 280, organic: true, description: "Crunchy carrots.", seller: commonSeller, delivery, priceHistory: [35,38,40,42,41,40,40]},
  { id: 15, name: "Cabbage", category: "vegetables", img: "/img/vegetables/cabbage.png", price: 28, unit: "Quintal", stock: 320, organic: false, description: "Fresh cabbage.", seller: commonSeller, delivery, priceHistory: [25,27,28,30,29,28,28]},
  { id: 16, name: "Cauliflower", category: "vegetables", img: "/img/vegetables/cauliflower.png", price: 32, unit: "Quintal", stock: 290, organic: false, description: "White cauliflower.", seller: commonSeller, delivery, priceHistory: [28,30,32,34,33,32,32]},
  { id: 17, name: "Brinjal", category: "vegetables", img: "/img/vegetables/brinjal.png", price: 38, unit: "Quintal", stock: 260, organic: false, description: "Fresh brinjal.", seller: commonSeller, delivery, priceHistory: [34,36,38,40,39,38,38]},
  { id: 18, name: "Lady Finger", category: "vegetables", img: "/img/vegetables/okra.png", price: 45, unit: "Quintal", stock: 240, organic: true, description: "Tender okra.", seller: commonSeller, delivery, priceHistory: [40,43,45,47,46,45,45]},
  { id: 19, name: "Pumpkin", category: "vegetables", img: "/img/vegetables/pumpkin.png", price: 20, unit: "Quintal", stock: 350, organic: false, description: "Fresh pumpkin.", seller: commonSeller, delivery, priceHistory: [18,19,20,22,21,20,20]},
  { id: 20, name: "Cucumber", category: "vegetables", img: "/img/vegetables/cucumber.png", price: 22, unit: "Quintal", stock: 300, organic: true, description: "Green cucumbers.", seller: commonSeller, delivery, priceHistory: [20,21,22,24,23,22,22]},

  // 🌱 SEEDS (21–30)
  { id: 21, name: "Rice Seeds", category: "seeds", img: "/img/seeds/rice.png", price: 120, unit: "Bag", stock: 200, organic: true, description: "High yield rice seeds.", seller: seedSeller, delivery, priceHistory: [110,115,118,120,122,120,120]},
  { id: 22, name: "Wheat Seeds", category: "seeds", img: "/img/seeds/wheat.png", price: 110, unit: "Bag", stock: 180, organic: true, description: "Certified wheat seeds.", seller: seedSeller, delivery, priceHistory: [105,108,110,112,110,110,110]},
  { id: 23, name: "Maize Seeds", category: "seeds", img: "/img/seeds/maize.png", price: 100, unit: "Bag", stock: 190, organic: true, description: "Maize hybrid seeds.", seller: seedSeller, delivery, priceHistory: [95,98,100,102,101,100,100]},
  { id: 24, name: "Sunflower Seeds", category: "seeds", img: "/img/seeds/sunflower.png", price: 150, unit: "Bag", stock: 160, organic: true, description: "Oil rich sunflower seeds.", seller: seedSeller, delivery, priceHistory: [140,145,148,150,152,150,150]},
  { id: 25, name: "Groundnut Seeds", category: "seeds", img: "/img/seeds/groundnut.png", price: 140, unit: "Bag", stock: 170, organic: true, description: "High germination seeds.", seller: seedSeller, delivery, priceHistory: [130,135,138,140,142,140,140]},
  { id: 26, name: "Cotton Seeds", category: "seeds", img: "/img/seeds/cotton.png", price: 200, unit: "Bag", stock: 150, organic: false, description: "Hybrid cotton seeds.", seller: seedSeller, delivery, priceHistory: [190,195,198,200,202,200,200]},
  { id: 27, name: "Mustard Seeds", category: "seeds", img: "/img/seeds/mustard.png", price: 90, unit: "Bag", stock: 210, organic: true, description: "Oil grade mustard seeds.", seller: seedSeller, delivery, priceHistory: [85,88,90,92,91,90,90]},
  { id: 28, name: "Chilli Seeds", category: "seeds", img: "/img/seeds/chilli.png", price: 160, unit: "Bag", stock: 140, organic: true, description: "Spicy chilli seeds.", seller: seedSeller, delivery, priceHistory: [150,155,158,160,162,160,160]},
  { id: 29, name: "Tomato Seeds", category: "seeds", img: "/img/seeds/tomato.png", price: 170, unit: "Bag", stock: 130, organic: true, description: "Hybrid tomato seeds.", seller: seedSeller, delivery, priceHistory: [160,165,168,170,172,170,170]},
  { id: 30, name: "Coriander Seeds", category: "seeds", img: "/img/seeds/coriander.png", price: 80, unit: "Bag", stock: 220, organic: true, description: "Aromatic coriander seeds.", seller: seedSeller, delivery, priceHistory: [75,78,80,82,81,80,80]},

  // 💊 MEDICINES (31–40)
  { id: 31, name: "Neem Oil", category: "medicines", img: "/img/medicines/neem-oil.png", price: 250, unit: "Litre", stock: 200, organic: true, description: "Bio pesticide.", seller: medicineSeller, delivery, priceHistory: [240,245,248,250,252,250,250]},
  { id: 32, name: "Urea Fertilizer", category: "medicines", img: "/img/medicines/urea.png", price: 300, unit: "Bag", stock: 300, organic: false, description: "Nitrogen fertilizer.", seller: medicineSeller, delivery, priceHistory: [290,295,298,300,302,300,300]},
  { id: 33, name: "DAP Fertilizer", category: "medicines", img: "/img/medicines/dap.png", price: 350, unit: "Bag", stock: 280, organic: false, description: "Phosphate fertilizer.", seller: medicineSeller, delivery, priceHistory: [340,345,348,350,352,350,350]},
  { id: 34, name: "Potash", category: "medicines", img: "/img/medicines/potash.png", price: 280, unit: "Bag", stock: 260, organic: false, description: "Potassium fertilizer.", seller: medicineSeller, delivery, priceHistory: [270,275,278,280,282,280,280]},
  { id: 35, name: "Bio Pesticide", category: "medicines", img: "/img/medicines/biopesticide.png", price: 220, unit: "Litre", stock: 190, organic: true, description: "Eco friendly pesticide.", seller: medicineSeller, delivery, priceHistory: [210,215,218,220,222,220,220]},
  { id: 36, name: "Fungicide", category: "medicines", img: "/img/medicines/fungicide.png", price: 260, unit: "Litre", stock: 180, organic: false, description: "Crop disease control.", seller: medicineSeller, delivery, priceHistory: [250,255,258,260,262,260,260]},
  { id: 37, name: "Insecticide", category: "medicines", img: "/img/medicines/insecticide.png", price: 270, unit: "Litre", stock: 170, organic: false, description: "Pest control.", seller: medicineSeller, delivery, priceHistory: [260,265,268,270,272,270,270]},
  { id: 38, name: "Growth Booster", category: "medicines", img: "/img/medicines/booster.png", price: 240, unit: "Litre", stock: 160, organic: true, description: "Plant growth enhancer.", seller: medicineSeller, delivery, priceHistory: [230,235,238,240,242,240,240]},
  { id: 39, name: "Soil Conditioner", category: "medicines", img: "/img/medicines/soil.png", price: 290, unit: "Bag", stock: 150, organic: true, description: "Soil fertility booster.", seller: medicineSeller, delivery, priceHistory: [280,285,288,290,292,290,290]},
  { id: 40, name: "Micronutrient Mix", category: "medicines", img: "/img/medicines/micro.png", price: 310, unit: "Bag", stock: 140, organic: true, description: "Essential nutrients mix.", seller: medicineSeller, delivery, priceHistory: [300,305,308,310,312,310,310]},

  // 🍃 LEAFS (41–50)
  { id: 41, name: "Spinach", category: "leafs", img: "/img/leafs/spinach.png", price: 20, unit: "Quintal", stock: 150, organic: true, description: "Fresh spinach.", seller: commonSeller, delivery, priceHistory: [18,19,20,22,21,20,20]},
  { id: 42, name: "Mint Leaves", category: "leafs", img: "/img/leafs/mint.png", price: 15, unit: "Quintal", stock: 120, organic: true, description: "Aromatic mint.", seller: commonSeller, delivery, priceHistory: [14,15,16,15,15,15,15]},
  { id: 43, name: "Coriander Leaves", category: "leafs", img: "/img/leafs/coriander.png", price: 18, unit: "Quintal", stock: 130, organic: true, description: "Fresh coriander.", seller: commonSeller, delivery, priceHistory: [16,17,18,20,19,18,18]},
  { id: 44, name: "Curry Leaves", category: "leafs", img: "/img/leafs/curry.png", price: 12, unit: "Quintal", stock: 140, organic: true, description: "Aromatic curry leaves.", seller: commonSeller, delivery, priceHistory: [10,11,12,13,12,12,12]},
  { id: 45, name: "Fenugreek Leaves", category: "leafs", img: "/img/leafs/fenugreek.png", price: 16, unit: "Quintal", stock: 110, organic: true, description: "Healthy greens.", seller: commonSeller, delivery, priceHistory: [14,15,16,17,16,16,16]},
  { id: 46, name: "Drumstick Leaves", category: "leafs", img: "/img/leafs/drumstick.png", price: 22, unit: "Quintal", stock: 100, organic: true, description: "Nutritious leaves.", seller: commonSeller, delivery, priceHistory: [20,21,22,24,23,22,22]},
  { id: 47, name: "Amaranthus", category: "leafs", img: "/img/leafs/amaranthus.png", price: 19, unit: "Quintal", stock: 120, organic: true, description: "Fresh amaranthus.", seller: commonSeller, delivery, priceHistory: [17,18,19,21,20,19,19]},
  { id: 48, name: "Lettuce", category: "leafs", img: "/img/leafs/lettuce.png", price: 25, unit: "Quintal", stock: 90, organic: true, description: "Fresh lettuce.", seller: commonSeller, delivery, priceHistory: [23,24,25,27,26,25,25]},
  { id: 49, name: "Basel Leaves", category: "leafs", img: "/img/leafs/basel.png", price: 30, unit: "Quintal", stock: 80, organic: true, description: "Fresh basil.", seller: commonSeller, delivery, priceHistory: [28,29,30,32,31,30,30]},
  { id: 50, name: "Taro Leaves", category: "leafs", img: "/img/leafs/taro.png", price: 28, unit: "Quintal", stock: 100, organic: true, description: "Traditional taro leaves.", seller: commonSeller, delivery, priceHistory: [26,27,28,30,29,28,28]},
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
