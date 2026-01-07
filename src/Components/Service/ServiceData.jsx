import {
  Tractor,
  Leaf,
  Droplet,
  Wheat,
  ShoppingBasket,
  ShieldCheck
} from "lucide-react";

const servicesData = [
  {
    id: "equipment-rental",
    title: "Farm Equipment Rental",
    icon: Tractor,
    description:
      "Rent modern tractors, harvesters, ploughing and farming equipment at affordable prices. Suitable for small and large-scale farmers.",
    details: [
      "Latest tractors & machinery",
      "Hourly / daily rental options",
      "Maintenance & fuel support",
      "Experienced operators available"
    ]
  },
  {
    id: "organic-farming",
    title: "Organic Farming Support",
    icon: Leaf,
    description:
      "Expert guidance for organic farming to improve soil fertility and produce chemical-free crops.",
    details: [
      "Natural fertilizers & composting",
      "Soil health improvement",
      "Organic certification guidance",
      "Higher market value crops"
    ]
  },
  {
    id: "irrigation",
    title: "Irrigation Services",
    icon: Droplet,
    description:
      "Advanced irrigation systems to reduce water wastage and increase productivity.",
    details: [
      "Drip & sprinkler systems",
      "Professional installation",
      "Low water consumption",
      "Subsidy guidance"
    ]
  },
  {
    id: "crop-advisory",
    title: "Crop Advisory",
    icon: Wheat,
    description:
      "Personalized advisory services to improve crop yield and reduce losses.",
    details: [
      "Crop selection advice",
      "Disease & pest control",
      "Seasonal planning",
      "Yield improvement techniques"
    ]
  },
  {
    id: "marketplace",
    title: "Agri Product Marketplace",
    icon: ShoppingBasket,
    description:
      "Buy high-quality seeds, fertilizers, pesticides, and farming tools from verified sellers.",
    details: [
      "Verified sellers",
      "Best price guarantee",
      "Quality products",
      "Doorstep delivery"
    ]
  },
  {
    id: "crop-insurance",
    title: "Crop Insurance",
    icon: ShieldCheck,
    description:
      "Protect crops from climate risks and natural disasters with affordable insurance plans.",
    details: [
      "Weather damage protection",
      "Low premium plans",
      "Fast claim processing",
      "Government-backed schemes"
    ]
  }
];

export default servicesData;
