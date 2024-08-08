import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  address?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  description?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutStoresInput;
};
