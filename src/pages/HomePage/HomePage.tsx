import React from "react";

import { Breadcrumb } from "components";

import { Wrapper } from "./HomePage.styles";

import { CategoriesTable } from "./CategoriesTable";

export const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Breadcrumb options={[{ title: "Home" }]} />
      <CategoriesTable />
    </Wrapper>
  );
};
