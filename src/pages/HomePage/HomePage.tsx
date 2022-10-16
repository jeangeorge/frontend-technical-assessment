import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { Breadcrumb, Spinner } from "components";
import { Category, AllCategoriesResponse } from "types";
import { ALL_CATEGORIES } from "queries";

import { CategoriesTable } from "./CategoriesTable";

import { Wrapper } from "./HomePage.styles";

export const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { loading, error, data } =
    useQuery<AllCategoriesResponse>(ALL_CATEGORIES);

  useEffect(() => {
    if (data !== undefined) {
      setCategories(data.allCategories);
    }
  }, [data]);

  if (loading) return <Spinner />;
  if (error != null) return <span>An error ocurred, please try again</span>;

  return (
    <Wrapper>
      <Breadcrumb options={[{ title: "Home" }]} />
      <CategoriesTable categories={categories} />
    </Wrapper>
  );
};
