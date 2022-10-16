import { gql } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
  mutation Mutation(
    $updateProductId: ID!
    $name: String
    $description: String
    $color: String
    $stock: Int
    $price: Float
    $categoryId: ID
  ) {
    updateProduct(
      id: $updateProductId
      name: $name
      description: $description
      color: $color
      stock: $stock
      price: $price
      category_id: $categoryId
    ) {
      name
      description
      color
      stock
      price
      category_id
      id
    }
  }
`;
