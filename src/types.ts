export interface TypeCartItem {
  [key: number]: {
    id: number;
    name: string;
    price: string;
    quantity: number;
  };
}

export interface TypeShopItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}
