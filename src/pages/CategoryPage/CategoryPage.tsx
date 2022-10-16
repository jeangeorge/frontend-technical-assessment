import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useLazyQuery } from "@apollo/client";

import { Breadcrumb, Error, Spinner } from "components";
import { Category } from "types";
import { CategoryPageContext } from "contexts";

import { AllCategoriesResponse } from "graphql/responses";
import { AllCategoriesVariables } from "graphql/variables";
import { ALL_CATEGORIES } from "graphql/queries";

import { ProductsTable, AddProductModal, HeaderSection } from "./components";
import { Wrapper } from "./CategoryPage.styles";

export const CategoryPage: React.FC = () => {
  const [category, setCategory] = useState({} as Category);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const breadcrumb = useMemo(() => {
    if (category === undefined) {
      return undefined;
    }
    return `Category - ${category.name}`;
  }, [category]);

  const [getCategory, { loading, error, data }] = useLazyQuery<
    AllCategoriesResponse,
    AllCategoriesVariables
  >(ALL_CATEGORIES);

  useEffect(() => {
    if (params === null || params.id === undefined || isNaN(+params.id)) {
      navigate("/404");
    } else {
      getCategory({ variables: { filter: { id: +params.id } } });
    }
  }, [params]);

  useEffect(() => {
    if (data !== undefined) {
      setCategory(data.allCategories[0]);
    }
  }, [data]);

  if (loading) return <Spinner />;
  if (error != null) return <Error />;

  return (
    <CategoryPageContext.Provider
      value={{ category, getCategory, isModalOpened, setIsModalOpened }}
    >
      <Wrapper>
        <Breadcrumb
          options={[{ title: "Home", redirect: "/" }, { title: breadcrumb }]}
        ></Breadcrumb>
        {category !== undefined ? (
          <>
            <HeaderSection />
            <ProductsTable />
            <AddProductModal />
          </>
        ) : (
          <Error message="No category was found." />
        )}
      </Wrapper>
    </CategoryPageContext.Provider>
  );
};
