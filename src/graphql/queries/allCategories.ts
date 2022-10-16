import { gql } from "@apollo/client";

export const ALL_CATEGORIES = gql`
  query AllCategories($filter: CategoryFilter, $perPage: Int, $page: Int) {
    allCategories(filter: $filter, perPage: $perPage, page: $page) {
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
