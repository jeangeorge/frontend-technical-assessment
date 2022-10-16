import { HomePageContext, IHomePageContext } from "contexts";
import { useContext } from "react";

export function useHomePage(): IHomePageContext {
  const homePageContext = useContext(HomePageContext);
  if (homePageContext === undefined) {
    throw new Error("HomePageContext error");
  }
  return homePageContext;
}
