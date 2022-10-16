import { createContext } from "react";
import { LazyQueryExecFunction } from "@apollo/client";

import { AllProductsResponse } from "graphql/responses";
import { AllProductsVariables } from "graphql/variables";

import { Product } from "types";

export interface IProductDetailsPageContext {
  product?: Product;
  loading: boolean;
  getProduct: LazyQueryExecFunction<AllProductsResponse, AllProductsVariables>;
}

export const ProductDetailsPageContext = createContext(
  {} as IProductDetailsPageContext
);
