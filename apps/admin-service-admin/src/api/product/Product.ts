import { Category } from "../category/Category";
import { Store } from "../store/Store";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  stock: number | null;
  store?: Store | null;
  updatedAt: Date;
};
