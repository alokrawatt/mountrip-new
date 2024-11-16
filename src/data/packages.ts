export interface TrekDate {
  startDate: string;
  endDate: string;
  availableSpots: number;
  price: string;
}

export interface Package {
  id: number;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  price: string;
  images: string[];
  elevation: string;
  distance: string;
  bestMonths: string[];
  detailedDescription: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    elevation?: string;
    distance?: string;
  }[];
  includedServices: string[];
  excludedServices: string[];
  upcomingDates: TrekDate[];
}

export const packages: Package[] = [
  {
    id: 1,
    title: "Valley of Flowers Trek",
    description: "Embark on a mesmerizing journey through the UNESCO World Heritage site, Valley of Flowers.",
    duration: "6 Days",
    groupSize: "8-12 People",
    difficulty: "Moderate",
    price: "₹16,999",
    elevation: "14,400 ft",
    distance: "37 km",
    images: [
      "https://images.unsplash.com/photo-1658939061463-105935bf38cc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80"
    ],
    bestMonths: ["July", "August", "September"],
    detailedDescription: "The Valley of Flowers Trek is a vibrant journey through one of UNESCO's Natural World Heritage Sites. Located in Uttarakhand's Chamoli district, this moderate trek offers a unique opportunity to explore an enchanted valley where hundreds of species of wildflowers bloom against a backdrop of towering Himalayan peaks.",
    highlights: [
      "UNESCO World Heritage Site",
      "Over 300 species of wildflowers",
      "Visit to Hemkund Sahib",
      "Rich biodiversity and rare Himalayan wildlife",
      "Stunning views of Nanda Devi"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Govindghat",
        description: "Arrive at Govindghat and prepare for the trek. Evening briefing and equipment check.",
        elevation: "5,997 ft"
      },
      {
        day: 2,
        title: "Trek to Ghangaria",
        description: "A 9 km trek through beautiful forests and waterfalls.",
        elevation: "10,000 ft",
        distance: "9 km"
      },
      {
        day: 3,
        title: "Valley of Flowers",
        description: "Full day exploration of the valley and its diverse flora.",
        elevation: "11,500 ft",
        distance: "8 km"
      }
    ],
    includedServices: [
      "Professional trek guide",
      "Camping equipment",
      "All meals during trek",
      "First aid and oxygen support",
      "Forest permits"
    ],
    excludedServices: [
      "Personal equipment",
      "Travel insurance",
      "Transportation to base camp",
      "Personal expenses"
    ],
    upcomingDates: [
      {
        startDate: "2024-07-15",
        endDate: "2024-07-20",
        availableSpots: 8,
        price: "₹16,999"
      },
      {
        startDate: "2024-08-01",
        endDate: "2024-08-06",
        availableSpots: 12,
        price: "₹16,999"
      }
    ]
  },
  {
    id: 2,
    title: "Kedarkantha Summit",
    description: "Conquer the magnificent Kedarkantha peak at 12,500 ft, offering breathtaking views of the Himalayan range.",
    duration: "6 Days",
    groupSize: "10-15 People",
    difficulty: "Moderate",
    price: "₹12,999",
    elevation: "12,500 ft",
    distance: "20 km",
    images: [
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522232000905-0b5b5c067a4b?auto=format&fit=crop&q=80"
    ],
    bestMonths: ["December", "January", "February", "March"],
    detailedDescription: "The Kedarkantha trek is one of the most popular winter treks in India. Located in the Uttarkashi district of Uttarakhand, this trek offers stunning views of the Himalayan range, pristine snow-covered trails, and camping under star-lit skies. The trek takes you through dense pine forests, beautiful clearings, and picturesque villages, making it perfect for both beginners and experienced trekkers.",
    highlights: [
      "360-degree view of Himalayan peaks",
      "Beautiful camping sites in clearings",
      "Dense pine and oak forests",
      "Snow-covered trails in winter",
      "Ancient Shiva temple at summit"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Sankri",
        description: "Drive from Dehradun to Sankri. Evening briefing and acclimatization walk.",
        elevation: "6,400 ft"
      },
      {
        day: 2,
        title: "Trek to Juda Ka Talab",
        description: "Trek through dense pine forests to a beautiful lake campsite.",
        elevation: "9,100 ft",
        distance: "4 km"
      },
      {
        day: 3,
        title: "Trek to Kedarkantha Base",
        description: "Gradual ascent through meadows and forests to the base camp.",
        elevation: "11,250 ft",
        distance: "4 km"
      },
      {
        day: 4,
        title: "Summit Day and Return to Base",
        description: "Early morning summit climb followed by descent to base camp.",
        elevation: "12,500 ft",
        distance: "6 km"
      },
      {
        day: 5,
        title: "Trek to Sankri",
        description: "Descend through beautiful forests back to Sankri village.",
        elevation: "6,400 ft",
        distance: "6 km"
      },
      {
        day: 6,
        title: "Departure",
        description: "Drive back to Dehradun. Trek concludes."
      }
    ],
    includedServices: [
      "Expert trek leader",
      "Camping equipment and tents",
      "All meals during trek",
      "Safety equipment",
      "Forest permits",
      "First aid medical kits"
    ],
    excludedServices: [
      "Personal trekking gear",
      "Travel insurance",
      "Transportation to Sankri",
      "Personal expenses",
      "Porters for personal bags"
    ],
    upcomingDates: [
      {
        startDate: "2024-12-20",
        endDate: "2024-12-25",
        availableSpots: 10,
        price: "₹12,999"
      },
      {
        startDate: "2025-01-05",
        endDate: "2025-01-10",
        availableSpots: 15,
        price: "₹12,999"
      }
    ]
  },
  {
    id: 3,
    title: "Nanda Devi Base Camp",
    description: "Adventure to the base of India's highest mountain entirely within the country.",
    duration: "9 Days",
    groupSize: "6-8 People",
    difficulty: "Challenging",
    price: "₹24,999",
    elevation: "13,123 ft",
    distance: "45 km",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606067000227-5a018fddf2b0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80"
    ],
    bestMonths: ["May", "June", "September", "October"],
    detailedDescription: "The Nanda Devi Base Camp trek is an extraordinary journey to the foot of India's second-highest peak. This challenging trek takes you through the Nanda Devi National Park, a UNESCO World Heritage site, offering unparalleled views of the twin peaks of Nanda Devi. Experience the rich biodiversity, remote villages, and the spiritual significance of this majestic mountain.",
    highlights: [
      "UNESCO World Heritage Site",
      "Views of Nanda Devi East and West peaks",
      "Rich Himalayan flora and fauna",
      "Traditional Kumaoni villages",
      "Pristine alpine meadows",
      "Ancient temples and monasteries"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Munsiyari",
        description: "Drive from Kathgodam to Munsiyari. Acclimatization and briefing.",
        elevation: "7,200 ft"
      },
      {
        day: 2,
        title: "Trek to Lilam",
        description: "Begin trek through dense forest and traditional villages.",
        elevation: "7,200 ft",
        distance: "6 km"
      },
      {
        day: 3,
        title: "Lilam to Bugdiar",
        description: "Steep ascent through rhododendron forests.",
        elevation: "8,900 ft",
        distance: "7 km"
      },
      {
        day: 4,
        title: "Bugdiar to Martoli",
        description: "Trek through ancient trading route to historic village.",
        elevation: "11,500 ft",
        distance: "8 km"
      },
      {
        day: 5,
        title: "Martoli to Pachhu",
        description: "Challenging trek with stunning mountain views.",
        elevation: "12,500 ft",
        distance: "6 km"
      },
      {
        day: 6,
        title: "Pachhu to Base Camp",
        description: "Final ascent to base camp with panoramic views.",
        elevation: "13,123 ft",
        distance: "5 km"
      },
      {
        day: 7,
        title: "Base Camp Exploration",
        description: "Full day to explore and photograph the area.",
        elevation: "13,123 ft"
      },
      {
        day: 8,
        title: "Begin Descent",
        description: "Start return journey to Martoli.",
        elevation: "11,500 ft",
        distance: "7 km"
      },
      {
        day: 9,
        title: "Return to Munsiyari",
        description: "Final descent and drive back to Kathgodam."
      }
    ],
    includedServices: [
      "Experienced high-altitude guide",
      "Quality camping equipment",
      "All meals (vegetarian)",
      "Permits and forest fees",
      "Safety and medical equipment",
      "Porter support for common equipment"
    ],
    excludedServices: [
      "Personal trekking gear",
      "Travel insurance",
      "Transportation to Munsiyari",
      "Personal porter charges",
      "Emergency evacuation costs",
      "Personal medications"
    ],
    upcomingDates: [
      {
        startDate: "2024-05-15",
        endDate: "2024-05-23",
        availableSpots: 6,
        price: "₹24,999"
      },
      {
        startDate: "2024-09-10",
        endDate: "2024-09-18",
        availableSpots: 8,
        price: "₹24,999"
      }
    ]
  },
  {
    id: 4,
    title: "Chandrashila via Deoria Lake",
    description: "A scenic trek to the moon rock summit through pristine Deoria Lake and the spiritual town of Chopta.",
    duration: "5 Days",
    groupSize: "8-12 People",
    difficulty: "Moderate",
    price: "₹14,999",
    elevation: "13,123 ft",
    distance: "28 km",
    images: [
      "https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594475913503-d8c6488e1c0d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593592217848-f4cd2b17709c?auto=format&fit=crop&q=80"
    ],
    bestMonths: ["March", "April", "May", "October", "November"],
    detailedDescription: "The Chandrashila trek via Deoria Lake is a unique blend of natural beauty and spiritual significance. Starting with the pristine Deoria Tal, continuing through the meadows of Chopta (Mini Switzerland of India), and culminating at the Chandrashila summit, this trek offers diverse landscapes and breathtaking views of major Himalayan peaks.",
    highlights: [
      "Sunrise view from Chandrashila summit",
      "Pristine Deoria Lake surrounded by forests",
      "Tungnath temple - highest Shiva temple",
      "Chopta's beautiful meadows",
      "360° views of major Himalayan peaks",
      "Rich wildlife spotting opportunities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Sari Village",
        description: "Drive from Rishikesh to Sari. Evening acclimatization walk and briefing.",
        elevation: "6,601 ft",
        distance: "0 km"
      },
      {
        day: 2,
        title: "Trek to Deoria Tal",
        description: "Short trek to the beautiful lake, evening exploration and camping by the lake.",
        elevation: "7,999 ft",
        distance: "3 km"
      },
      {
        day: 3,
        title: "Deoria Tal to Chopta",
        description: "Trek through dense forests and meadows to reach Chopta.",
        elevation: "9,600 ft",
        distance: "12 km"
      },
      {
        day: 4,
        title: "Chopta to Chandrashila Summit via Tungnath",
        description: "Early morning trek to Tungnath temple and summit climb for sunrise.",
        elevation: "13,123 ft",
        distance: "8 km"
      },
      {
        day: 5,
        title: "Chopta to Rishikesh",
        description: "Return drive to Rishikesh. Trek concludes.",
        distance: "0 km"
      }
    ],
    includedServices: [
      "Professional trek guide",
      "Camping equipment",
      "All meals during trek",
      "First aid and oxygen support",
      "Forest permits",
      "Transportation from Chopta to Rishikesh"
    ],
    excludedServices: [
      "Personal trekking gear",
      "Travel insurance",
      "Transportation to Sari village",
      "Personal expenses",
      "Porter charges",
      "Any additional accommodation"
    ],
    upcomingDates: [
      {
        startDate: "2024-04-10",
        endDate: "2024-04-14",
        availableSpots: 12,
        price: "₹14,999"
      },
      {
        startDate: "2024-05-05",
        endDate: "2024-05-09",
        availableSpots: 8,
        price: "₹14,999"
      },
      {
        startDate: "2024-10-15",
        endDate: "2024-10-19",
        availableSpots: 10,
        price: "₹14,999"
      }
    ]
  }
];

export const getPackageById = (id: number): Package | undefined => {
  return packages.find(pkg => pkg.id === id);
};