
// Mock data for DirectBiz app
import { Business, Category, Review } from "@/types";

export const mockBusinesses: Business[] = [
  {
    id: "1",
    name: "Tech Haven",
    category: "Electronics",
    description: "Premier electronics store offering the latest gadgets, tech accessories, and expert advice for all your technology needs.",
    rating: 4.8,
    reviewCount: 245,
    address: "123 Tech Blvd, Silicon Valley, CA",
    phone: "(555) 123-4567",
    email: "info@techhaven.com",
    website: "https://techhaven.example.com",
    hours: "Mon-Sat: 9AM-9PM, Sun: 10AM-6PM",
    latitude: 37.7749,
    longitude: -122.4194,
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    isOpen: true,
    isFeatured: true,
    tags: ["Tech", "Electronics", "Gadgets"]
  },
  {
    id: "2",
    name: "Cafe Serenity",
    category: "Cafe",
    description: "Cozy neighborhood cafe with specialty coffee, freshly baked pastries, and a peaceful atmosphere for work or relaxation.",
    rating: 4.6,
    reviewCount: 189,
    address: "456 Coffee Lane, Portland, OR",
    phone: "(555) 234-5678",
    email: "hello@cafeserenity.com",
    website: "https://cafeserenity.example.com",
    hours: "Daily: 6AM-8PM",
    latitude: 45.5152,
    longitude: -122.6784,
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    isOpen: true,
    tags: ["Coffee", "Breakfast", "Wifi"]
  },
  {
    id: "3",
    name: "Wellness Spa",
    category: "Health & Beauty",
    description: "Luxurious spa offering massage therapy, skincare treatments, and holistic wellness services in a tranquil environment.",
    rating: 4.9,
    reviewCount: 312,
    address: "789 Relaxation Road, Malibu, CA",
    phone: "(555) 345-6789",
    email: "appointments@wellnessspa.com",
    website: "https://wellnessspa.example.com",
    hours: "Mon-Sun: 10AM-7PM",
    latitude: 34.0259,
    longitude: -118.7798,
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    isOpen: false,
    isFeatured: true,
    tags: ["Spa", "Massage", "Wellness"]
  },
  {
    id: "4",
    name: "Urban Bites",
    category: "Restaurant",
    description: "Modern bistro serving innovative fusion cuisine made with locally-sourced ingredients in an industrial-chic setting.",
    rating: 4.5,
    reviewCount: 278,
    address: "321 Foodie Street, Chicago, IL",
    phone: "(555) 456-7890",
    email: "reservations@urbanbites.com",
    website: "https://urbanbites.example.com",
    hours: "Tue-Sun: 11AM-11PM, Closed Mondays",
    latitude: 41.8781,
    longitude: -87.6298,
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    isOpen: true,
    tags: ["Dinner", "Lunch", "Fusion"]
  },
  {
    id: "5",
    name: "Fitness Focus",
    category: "Fitness",
    description: "State-of-the-art fitness center with personal training, group classes, and premium equipment for all fitness levels.",
    rating: 4.7,
    reviewCount: 156,
    address: "555 Muscle Avenue, Miami, FL",
    phone: "(555) 567-8901",
    email: "info@fitnessfocus.com",
    website: "https://fitnessfocus.example.com",
    hours: "Mon-Fri: 5AM-10PM, Sat-Sun: 7AM-8PM",
    latitude: 25.7617,
    longitude: -80.1918,
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    isOpen: true,
    tags: ["Gym", "Training", "Classes"]
  },
  {
    id: "6",
    name: "Book Nook",
    category: "Retail",
    description: "Charming independent bookstore with a curated selection of titles, reading nooks, and regular author events.",
    rating: 4.9,
    reviewCount: 203,
    address: "987 Reader Lane, Austin, TX",
    phone: "(555) 678-9012",
    email: "books@booknook.com",
    website: "https://booknook.example.com",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    latitude: 30.2672,
    longitude: -97.7431,
    images: [
      "https://images.unsplash.com/photo-1521056787327-242dff32a2f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    isOpen: true,
    isFeatured: true,
    tags: ["Books", "Reading", "Events"]
  }
];

export const mockCategories: Category[] = [
  { id: "1", name: "Restaurants", icon: "utensils", count: 32 },
  { id: "2", name: "Shopping", icon: "shopping-bag", count: 28 },
  { id: "3", name: "Health & Beauty", icon: "spa", count: 18 },
  { id: "4", name: "Fitness", icon: "dumbbell", count: 12 },
  { id: "5", name: "Electronics", icon: "mobile-alt", count: 15 },
  { id: "6", name: "Home Services", icon: "home", count: 22 },
  { id: "7", name: "Automotive", icon: "car", count: 14 },
  { id: "8", name: "Cafe", icon: "coffee", count: 20 },
  { id: "9", name: "Entertainment", icon: "film", count: 16 },
  { id: "10", name: "Retail", icon: "store", count: 24 }
];

export const mockReviews: Review[] = [
  {
    id: "1",
    businessId: "1",
    userName: "Sarah J.",
    rating: 5,
    comment: "Amazing selection of tech gadgets! The staff was incredibly knowledgeable and helped me find exactly what I needed.",
    date: "2023-05-15"
  },
  {
    id: "2",
    businessId: "1",
    userName: "Michael T.",
    rating: 4,
    comment: "Great store with the latest tech. Prices are a bit high but the quality and service make up for it.",
    date: "2023-06-02"
  },
  {
    id: "3",
    businessId: "2",
    userName: "Emma R.",
    rating: 5,
    comment: "My favorite coffee spot in town! The atmosphere is so peaceful and their pastries are to die for.",
    date: "2023-04-18"
  },
  {
    id: "4",
    businessId: "3",
    userName: "David L.",
    rating: 5,
    comment: "Had the most relaxing massage of my life here. The facilities are beautiful and the staff is professional.",
    date: "2023-07-10"
  },
  {
    id: "5",
    businessId: "4",
    userName: "Lisa M.",
    rating: 4,
    comment: "Delicious food and creative menu. The fusion dishes are unique and flavorful. Service was a bit slow.",
    date: "2023-05-30"
  }
];
