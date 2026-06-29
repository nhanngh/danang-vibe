export interface Place {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: "bridge" | "beach" | "mountain" | "museum" | "other";
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
