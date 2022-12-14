import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
  query AllProducts($filter: ProductFilter) {
    allProducts(filter: $filter) {
      id
      name
      description
      color
      stock
      price
      category_id
    }
  }
`;
