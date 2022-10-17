import { CategoryPageContext, ICategoryPageContext } from "contexts";
import { useContext } from "react";

export function useCategoryPage(): ICategoryPageContext {
  const categoryPageContext = useContext(CategoryPageContext);
  if (categoryPageContext === undefined) {
    throw new Error("CategoryPageContext error");
  }
  return categoryPageContext;
}
