const agricultureSchemes = [
  {
    schemeId: "PM_KISAN",
    schemeName: "Pradhan Mantri Kisan Samman Nidhi",
    launchYear: 2019,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "Provide direct income support to farmers",
    financialAssistance: {
      amountPerYear: 6000,
      installments: 3,
      amountPerInstallment: 2000,
      paymentMode: "Direct Benefit Transfer (DBT)"
    },
    eligibility: {
      beneficiaries: "Land-holding farmers",
      exclusions: [
        "Income tax payers",
        "Government employees",
        "Professionals"
      ]
    },
    benefits: [
      "Helps purchase seeds and fertilizers",
      "Reduces dependency on money lenders"
    ],
    applyLink: "https://pmkisan.gov.in/RegistrationFormupdated.aspx",
    officialWebsite: "https://pmkisan.gov.in"
  },

  {
    schemeId: "PMFBY",
    schemeName: "Pradhan Mantri Fasal Bima Yojana",
    launchYear: 2016,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "Provide crop insurance against natural calamities",
    premiumDetails: {
      kharif: "2%",
      rabi: "1.5%",
      commercialCrops: "5%"
    },
    risksCovered: [
      "Flood",
      "Drought",
      "Cyclone",
      "Pests",
      "Diseases"
    ],
    benefits: [
      "Financial protection",
      "Encourages modern farming"
    ],
    applyLink: "https://pmfby.gov.in/selfRegistration",
    officialWebsite: "https://pmfby.gov.in"
  },

  {
    schemeId: "SOIL_HEALTH_CARD",
    schemeName: "Soil Health Card Scheme",
    launchYear: 2015,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "Improve soil health and crop productivity",
    services: [
      "Soil testing",
      "Nutrient analysis",
      "Fertilizer recommendation"
    ],
    parametersTested: [
      "Nitrogen",
      "Phosphorus",
      "Potassium",
      "pH",
      "Organic Carbon"
    ],
    benefits: [
      "Balanced fertilizer use",
      "Higher crop yield"
    ],
    officialWebsite: "https://soilhealth.dac.gov.in"
  },

  {
    schemeId: "PMKSY",
    schemeName: "Pradhan Mantri Krishi Sinchayee Yojana",
    launchYear: 2015,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "Ensure water availability to every field",
    keyComponents: [
      "Accelerated Irrigation Benefit Programme",
      "Micro Irrigation (Drip & Sprinkler)",
      "Watershed Development"
    ],
    benefits: [
      "Efficient water use",
      "Reduced water wastage"
    ],
    officialWebsite: "https://pmksy.gov.in"
  },

  {
    schemeId: "KCC",
    schemeName: "Kisan Credit Card",
    launchYear: 1998,
    ministry: "Ministry of Finance",
    objective: "Provide affordable credit to farmers",
    loanUsage: [
      "Seeds",
      "Fertilizers",
      "Equipment",
      "Animal husbandry",
      "Fisheries"
    ],
    features: [
      "Low interest rates",
      "Flexible repayment",
      "Quick loan approval"
    ],
    applyMode: "Apply through bank branches or CSC centers"
  },

  {
    schemeId: "E_NAM",
    schemeName: "National Agriculture Market (e-NAM)",
    launchYear: 2016,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "Create a unified national agricultural market",
    features: [
      "Online trading platform",
      "Transparent pricing",
      "Reduced middlemen"
    ],
    benefits: [
      "Better prices for farmers",
      "Real-time market data"
    ],
    officialWebsite: "https://enam.gov.in"
  },

  {
    schemeId: "PKVY",
    schemeName: "Paramparagat Krishi Vikas Yojana",
    launchYear: 2015,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "Promote organic farming",
    farmingType: "Organic",
    support: [
      "Organic inputs",
      "Certification assistance",
      "Marketing support"
    ],
    benefits: [
      "Healthy food production",
      "Improved soil fertility",
      "Higher market value"
    ]
  },

  {
    schemeId: "RKVY",
    schemeName: "Rashtriya Krishi Vikas Yojana",
    launchYear: 2007,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "State-level agriculture development",
    focusAreas: [
      "Infrastructure development",
      "Innovation",
      "Agri-startups"
    ],
    benefits: [
      "Increased farmer income",
      "Employment generation"
    ],
    officialWebsite: "https://rkvy.da.gov.in"
  },

  {
    schemeId: "NMSA",
    schemeName: "National Mission for Sustainable Agriculture",
    launchYear: 2014,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "Promote climate-resilient agriculture",
    focusAreas: [
      "Water conservation",
      "Soil management",
      "Climate change adaptation"
    ],
    benefits: [
      "Sustainable farming practices",
      "Environmental protection"
    ]
  },

  {
    schemeId: "SMAM",
    schemeName: "Sub-Mission on Agricultural Mechanization",
    launchYear: 2014,
    ministry: "Ministry of Agriculture & Farmers Welfare",
    objective: "Promote farm mechanization",
    machinerySupported: [
      "Tractors",
      "Harvesters",
      "Seed drills",
      "Power tillers"
    ],
    subsidyRange: "40% - 60%",
    benefits: [
      "Reduced labor cost",
      "Improved efficiency"
    ]
  },

  {
    schemeId: "PMMSY",
    schemeName: "Pradhan Mantri Matsya Sampada Yojana",
    launchYear: 2020,
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    objective: "Develop fisheries and aquaculture",
    focusAreas: [
      "Fish production",
      "Cold storage",
      "Export promotion"
    ],
    benefits: [
      "Employment generation",
      "Higher income for fishers"
    ],
    officialWebsite: "https://pmmsy.dof.gov.in"
  },

  {
    schemeId: "NLM",
    schemeName: "National Livestock Mission",
    launchYear: 2014,
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    objective: "Develop livestock sector",
    coveredAreas: [
      "Dairy farming",
      "Poultry",
      "Sheep & goat farming"
    ],
    benefits: [
      "Rural employment generation",
      "Improved livestock productivity"
    ]
  }
];

export default agricultureSchemes;
