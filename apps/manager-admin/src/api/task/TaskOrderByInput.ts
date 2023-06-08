import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
