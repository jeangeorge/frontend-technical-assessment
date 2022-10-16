import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Breadcrumb, Button, Spinner } from "components";
import { Category } from "types";

import { Wrapper, Title, Header } from "./CategoryPage.styles";
import { ProductsTable } from "./ProductsTable";
import { AddProductModal } from "./AddProductModal";
import { useLazyQuery } from "@apollo/client";

import { AllCategoriesResponse } from "graphql/responses";
import { AllCategoriesVariables } from "graphql/variables";
import { ALL_CATEGORIES } from "graphql/queries";

export const CategoryPage: React.FC = () => {
  const [categoryId, setCategoryId] = useState<number>();
  const [category, setCategory] = useState<Category>();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const [getProducts, { loading, error, data }] = useLazyQuery<
    AllCategoriesResponse,
    AllCategoriesVariables
  >(ALL_CATEGORIES);

  useEffect(() => {
    if (params === null || params.id === undefined || isNaN(+params.id)) {
      navigate("/404");
    } else {
      setCategoryId(+params.id);
    }
  }, [params]);

  useEffect(() => {
    if (categoryId !== undefined) {
      getProducts({ variables: { filter: { id: categoryId } } });
    }
  }, [categoryId]);

  useEffect(() => {
    if (data !== undefined) {
      setCategory(data.allCategories[0]);
    }
  }, [data]);

  if (loading) return <Spinner />;
  if (error != null) return <span>An error ocurred, please try again</span>;

  return (
    <Wrapper>
      <Breadcrumb
        options={[
          { title: "Home", redirect: "/" },
          {
            title: category != null ? `Category - ${category.name}` : undefined,
          },
        ]}
      ></Breadcrumb>

      {category !== undefined ? (
        <>
          <Title>Category name: {category.name}</Title>
          <Header>
            <Title>Products</Title>
            <Button onClick={() => setIsModalOpened(true)}>Add</Button>
          </Header>
          <ProductsTable products={category.Products} />
          {isModalOpened && (
            <AddProductModal
              categoryId={category.id}
              onClose={() => setIsModalOpened(false)}
            />
          )}
        </>
      ) : (
        <div>No category was found.</div>
      )}
    </Wrapper>
  );
};
