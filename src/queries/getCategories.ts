import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    locations {
      id
      name
      description
    }
  }
`;
