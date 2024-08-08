import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  parentCategory?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
