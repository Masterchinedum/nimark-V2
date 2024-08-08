import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  parentCategory: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
