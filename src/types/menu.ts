export interface MenuItem {
    _id:string;
    id: string; // Always a string
    name: string;
    description: string;
    category: string;
    price: number;
    imageUrl: string;
    isAvailable: string;
  }
  
  export interface Offer {
    _id: string; // Make sure _id is always a string
    id: string; // Always a string
    name: string;
    description: string;
    category: string;
    price: number;
    imageUrl: string;
    isAvailable: boolean;
  }
  
  export interface OfferItem {
    _id:string;
    id: string; // Ensure id is always a string
    name: string;
    imageUrl: string;
    category: string;
    price: number;
    description: string;
    isAvailable: string; // 'available' or 'unavailable'
  }
  