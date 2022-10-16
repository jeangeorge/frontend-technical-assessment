import { gql } from "@apollo/client";

export const REMOVE_PRODUCT = gql`
  mutation Mutation($removeProductId: ID!) {
    removeProduct(id: $removeProductId) {
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
