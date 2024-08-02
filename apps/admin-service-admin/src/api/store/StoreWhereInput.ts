import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StoreWhereInput = {
  address?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  contactPhone?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
