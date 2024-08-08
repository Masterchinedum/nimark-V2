import { Product } from "../product/Product";

export type Store = {
  address: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
