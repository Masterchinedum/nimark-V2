import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  address?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  description?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutStoresInput;
};
