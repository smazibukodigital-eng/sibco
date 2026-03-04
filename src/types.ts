export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'grocery' | 'stationery' | 'tutoring';
  description?: string;
  items?: { item: string; qty: number | string }[];
  image?: string;
  popular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
