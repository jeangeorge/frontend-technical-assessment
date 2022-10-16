import { useContext } from "react";

import {
  IProductDetailsPageContext,
  ProductDetailsPageContext,
} from "contexts/ProductDetailsPageContext";

export function useProductDetailsPage(): IProductDetailsPageContext {
  const productDetailsPageContext = useContext(ProductDetailsPageContext);
  if (productDetailsPageContext === undefined) {
    throw new Error("ProductDetailsPageContext error");
  }
  return productDetailsPageContext;
}
