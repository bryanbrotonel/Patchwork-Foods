export interface CartItem {
  [key: number]: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}