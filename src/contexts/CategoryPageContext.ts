import { LazyQueryExecFunction } from "@apollo/client";
import { AllCategoriesResponse } from "graphql/responses";
import { AllCategoriesVariables } from "graphql/variables";
import { createContext } from "react";
import { Category } from "types";

export interface ICategoryPageContext {
  category: Category;
  getCategory: LazyQueryExecFunction<
    AllCategoriesResponse,
    AllCategoriesVariables
  >;
}

export const CategoryPageContext = createContext({} as ICategoryPageContext);
