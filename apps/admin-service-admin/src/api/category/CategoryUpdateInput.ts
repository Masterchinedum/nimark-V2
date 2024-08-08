import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  parentCategory?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
