import { gql } from "@apollo/client";

export const ALL_CATEGORIES = gql`
  query GetCategories {
    allCategories {
      id
      name
      description
    }
  }
`;
