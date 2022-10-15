import React from "react";
import { Breadcrumb } from "components";
import { Wrapper } from "./Home.styles";
import { CategoriesTable } from "./CategoriesTable";

export const Home: React.FC = () => {
  return (
    <Wrapper>
      <Breadcrumb options={[{ title: "Home" }]} />
      <CategoriesTable />
    </Wrapper>
  );
};
