import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  address?: SortOrder;
  contactEmail?: SortOrder;
  contactPhone?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
