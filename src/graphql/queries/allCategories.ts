import { gql } from "@apollo/client";

export const ALL_CATEGORIES = gql`
  query AllCategories($filter: CategoryFilter) {
    allCategories(filter: $filter) {
      id
      name
      description
      Products {
        id
        name
        description
      }
    }
  }
`;
