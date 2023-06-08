import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  completed?: BooleanFilter;
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
};
