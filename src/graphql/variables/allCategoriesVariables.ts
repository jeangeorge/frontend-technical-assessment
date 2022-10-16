import { CategoryFilter } from "graphql/filters";

export interface AllCategoriesVariables {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: string;
  filter?: CategoryFilter;
}
