export interface Bike {
  _id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  category: string;
  badge: string;
  badgeColor: string;
  rating: number;
  images: string[];
  features: {
    engine: {
      type: string;
      displacement: string;
      power: string;
    };
    performance: {
      topSpeed: string;
      mileage: string;
      braking: string;
    };
  };
} 