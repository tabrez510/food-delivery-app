export type CheckoutSessionRequest = {
  cartItems: {
    menuId: string;
    name: string;
    image: string;
    price: string;
    quantity: string;
  }[];
  deliveryDetails: {
    name: string;
    email: string;
    contact: string;
    address: string;
    city: string;
    country: string;
  };
  restaurantId: string;
};

// Represents an order with additional fields
export interface Order extends CheckoutSessionRequest {
  _id: string;
  status: string;
  totalAmount: number;
}

// State type for managing orders
export type OrderState = {
  loading: boolean;
  orders: Order[];
  createOrder: (orderRequest: CheckoutSessionRequest) => Promise<void>; // Renamed to createOrder
  getOrderDetails: () => Promise<void>;
};
