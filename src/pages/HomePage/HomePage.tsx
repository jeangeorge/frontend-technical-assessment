import React from "react";
import { useQuery } from "@apollo/client";

import { AllCategoriesResponse } from "graphql/responses";
import { ALL_CATEGORIES } from "graphql/queries";
import { AllCategoriesVariables } from "graphql/variables";

import { Breadcrumb, Error, Spinner } from "components";
import { HomePageContext } from "contexts";

import { CategoriesTable } from "./components";
import { Wrapper } from "./HomePage.styles";

export const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery<
    AllCategoriesResponse,
    AllCategoriesVariables
  >(ALL_CATEGORIES);

  if (loading) return <Spinner />;
  if (error !== undefined) return <Error />;

  return (
    <HomePageContext.Provider value={{ data }}>
      <Wrapper>
        <Breadcrumb options={[{ title: "Home" }]} />
        <CategoriesTable />
      </Wrapper>
    </HomePageContext.Provider>
  );
};
