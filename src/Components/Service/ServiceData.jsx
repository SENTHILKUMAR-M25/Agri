// import {
//   Tractor,
//   Leaf,
//   Droplet,
//   Wheat,
//   ShoppingBasket,
//   ShieldCheck
// } from "lucide-react";

// const servicesData = [
//   {
//     id: "equipment-rental",
//     title: "Farm Equipment Rental",
//     icon: Tractor,
//     description:
//       "Rent modern tractors, harvesters, ploughing and farming equipment at affordable prices. Suitable for small and large-scale farmers.",
//     details: [
//       "Latest tractors & machinery",
//       "Hourly / daily rental options",
//       "Maintenance & fuel support",
//       "Experienced operators available"
//     ]
//   },
//   {
//     id: "organic-farming",
//     title: "Organic Farming Support",
//     icon: Leaf,
//     description:
//       "Expert guidance for organic farming to improve soil fertility and produce chemical-free crops.",
//     details: [
//       "Natural fertilizers & composting",
//       "Soil health improvement",
//       "Organic certification guidance",
//       "Higher market value crops"
//     ]
//   },
//   {
//     id: "irrigation",
//     title: "Irrigation Services",
//     icon: Droplet,
//     description:
//       "Advanced irrigation systems to reduce water wastage and increase productivity.",
//     details: [
//       "Drip & sprinkler systems",
//       "Professional installation",
//       "Low water consumption",
//       "Subsidy guidance"
//     ]
//   },
//   {
//     id: "crop-advisory",
//     title: "Crop Advisory",
//     icon: Wheat,
//     description:
//       "Personalized advisory services to improve crop yield and reduce losses.",
//     details: [
//       "Crop selection advice",
//       "Disease & pest control",
//       "Seasonal planning",
//       "Yield improvement techniques"
//     ]
//   },
//   {
//     id: "marketplace",
//     title: "Agri Product Marketplace",
//     icon: ShoppingBasket,
//     description:
//       "Buy high-quality seeds, fertilizers, pesticides, and farming tools from verified sellers.",
//     details: [
//       "Verified sellers",
//       "Best price guarantee",
//       "Quality products",
//       "Doorstep delivery"
//     ]
//   },
//   {
//     id: "crop-insurance",
//     title: "Crop Insurance",
//     icon: ShieldCheck,
//     description:
//       "Protect crops from climate risks and natural disasters with affordable insurance plans.",
//     details: [
//       "Weather damage protection",
//       "Low premium plans",
//       "Fast claim processing",
//       "Government-backed schemes"
//     ]
//   }
// ];

// export default servicesData;




import {
  Tractor,
  Leaf,
  Droplet,
  Wheat,
  ShoppingBasket,
  ShieldCheck,
  Microscope,
  CloudSun,
  Truck,
  Users
} from "lucide-react";

const servicesData = [
  {
    id: "equipment-rental",
    title: "Farm Equipment Rental",
    category: "Machinery",
    icon: Tractor,
    color: "emerald",
    shortDesc: "Rent modern tractors and harvesters at affordable rates.",
    longDescription: "Our Equipment Hub provides small-to-medium scale farmers access to industrial-grade machinery. By removing the high barrier of ownership cost, we enable precision farming for everyone.",
    stats: { utilization: "98%", activeUsers: "5k+", reliability: "100%" },
    process: ["Browse Fleet", "Select Duration", "On-site Delivery", "Work & Return"],
    details: [
      "GPS-guided steering systems for precision",
      "Fuel-efficient Tier 4 engines",
      "24/7 technical breakdown support",
      "Available attachments: Plough, Seeder, Trailer"
    ],
    faqs: [
      { q: "Is fuel included?", a: "We provide a full tank; you only pay for what you use." },
      { q: "Do I need a license?", a: "No, we can provide a certified operator for a small fee." }
    ]
  },
  {
    id: "organic-farming",
    title: "Organic Transition Support",
    category: "Eco-Tech",
    icon: Leaf,
    color: "green",
    shortDesc: "Convert your traditional farm into a certified organic powerhouse.",
    longDescription: "Transitioning to organic isn't just about stopping chemicals; it's about rebuilding soil biology. Our experts guide you through the 3-year certification window.",
    stats: { soilHealth: "+45%", premiumPrice: "+30%", biodiversity: "High" },
    process: ["Soil Assessment", "Bio-Input Setup", "Certification Audit", "Market Linkage"],
    details: [
      "Custom vermicomposting unit installation",
      "Non-GMO seed sourcing",
      "Natural predator introduction for pest control",
      "Soil carbon sequestration tracking"
    ],
    faqs: [
      { q: "How long does certification take?", a: "Typically 36 months of chemical-free practice." },
      { q: "Will my yield drop?", a: "Initially yes, but soil fertility recovers to surpass old yields." }
    ]
  },
  {
    id: "smart-irrigation",
    title: "IoT Irrigation Systems",
    category: "Technology",
    icon: Droplet,
    color: "blue",
    shortDesc: "Precision watering systems with real-time moisture monitoring.",
    longDescription: "Leveraging LoRaWAN sensors and automated valves, our system ensures that plants receive exactly the amount of water they need based on evapotranspiration rates.",
    stats: { waterSaved: "60%", energyReduced: "30%", yieldIncrease: "15%" },
    process: ["Site Survey", "Hardware Install", "App Sync", "Automated Flow"],
    details: [
      "Solar-powered sensor nodes",
      "Weather-forecast integrated scheduling",
      "Sub-surface drip technology",
      "Mobile app control with manual override"
    ],
    faqs: [
      { q: "Does it work offline?", a: "Yes, the local controller stores schedules even without internet." },
      { q: "What is the battery life?", a: "Internal solar batteries last up to 5 years." }
    ]
  },
  {
    id: "crop-advisory",
    title: "AI Crop Advisory",
    category: "Consultancy",
    icon: Wheat,
    color: "amber",
    shortDesc: "Personalized data-driven insights to maximize your seasonal yield.",
    longDescription: "Our AI engine analyzes satellite multispectral imagery and local weather patterns to provide a daily 'To-Do' list for your specific plot.",
    stats: { accuracy: "94%", preventativeAction: "80%", userRating: "4.9/5" },
    process: ["Plot Mapping", "Data Analysis", "Weekly Reports", "Expert Call"],
    details: [
      "Early warning for Locusts and Fall Armyworm",
      "Optimal harvest window prediction",
      "Fertilizer application maps (VRT)",
      "Direct chat with Agronomists"
    ],
    faqs: [
      { q: "Can it detect diseases?", a: "Yes, via photo uploads and satellite heatmaps." },
      { q: "Is it specific to my region?", a: "Hyper-local data is used for every recommendation." }
    ]
  },
  {
    id: "agri-marketplace",
    title: "Agri Product Marketplace",
    category: "E-Commerce",
    icon: ShoppingBasket,
    color: "orange",
    shortDesc: "Buy high-quality seeds and tools from verified sellers.",
    longDescription: "A curated B2B and B2C marketplace ensuring that every seed and bottle of fertilizer sold meets national quality standards.",
    stats: { products: "10k+", vendors: "500+", delivery: "2-3 Days" },
    process: ["Search Item", "Compare Prices", "Secure Pay", "Doorstep Drop"],
    details: [
      "QR-code verified seed authenticity",
      "Bulk purchase discounts for cooperatives",
      "Eco-friendly packaging options",
      "Track-and-trace logistics"
    ],
    faqs: [
      { q: "Is there a return policy?", a: "Yes, 7-day returns for damaged or expired items." },
      { q: "Are the sellers verified?", a: "Every seller undergoes a rigorous 5-point background check." }
    ]
  },
  {
    id: "crop-insurance",
    title: "Parametric Insurance",
    category: "Finance",
    icon: ShieldCheck,
    color: "indigo",
    shortDesc: "Protect crops from climate risks with automated claim processing.",
    longDescription: "Unlike traditional insurance, our parametric model pays out automatically when weather data (rainfall/temperature) hits a certain threshold.",
    stats: { payoutSpeed: "48hrs", coverage: "$2M+", trustScore: "99%" },
    process: ["Select Plan", "Verify Land", "Policy Active", "Auto-Payout"],
    details: [
      "No lengthy damage assessment visits",
      "Drought and flood protection",
      "Government premium subsidy support",
      "Transparent blockchain-based ledger"
    ],
    faqs: [
      { q: "How are claims verified?", a: "Using third-party satellite and weather station data." },
      { q: "Is the payout fixed?", a: "Yes, based on the severity of the weather event." }
    ]
  }
];

export default servicesData;