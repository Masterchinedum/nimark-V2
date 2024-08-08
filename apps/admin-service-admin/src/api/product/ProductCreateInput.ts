import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
  store?: StoreWhereUniqueInput | null;
};
