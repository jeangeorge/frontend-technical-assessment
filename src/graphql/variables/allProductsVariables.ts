import { ProductFilter } from "graphql/filters";

export interface AllProductsVariables {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: string;
  filter?: ProductFilter;
}
