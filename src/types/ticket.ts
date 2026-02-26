export interface Ticket {
  id: string;
  name: string; // Early Bird, VIP, General
  price: number;
  description: string;
  available: number;
}