
// Type definitions for DirectBiz app

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: string;
  latitude: number;
  longitude: number;
  images: string[];
  isOpen: boolean;
  isFeatured?: boolean;
  tags?: string[];
}

export interface Review {
  id: string;
  businessId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}
