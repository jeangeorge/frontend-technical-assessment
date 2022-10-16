import { AllCategoriesResponse } from "graphql/responses";
import { createContext } from "react";

export interface IHomePageContext {
  data?: AllCategoriesResponse;
}

export const HomePageContext = createContext({} as IHomePageContext);
