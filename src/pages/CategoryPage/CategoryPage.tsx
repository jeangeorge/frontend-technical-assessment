import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Breadcrumb, Button } from "components";
import { getCategoryById } from "services";
import { Category } from "types";

import { Wrapper, Title, Header } from "./CategoryPage.styles";
import { ProductsTable } from "./ProductsTable";
import { AddProductModal } from "./AddProductModal";

export const CategoryPage: React.FC = () => {
  const [categoryId, setCategoryId] = useState<string>();
  const [category, setCategory] = useState<Category>();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  async function fetchCategory(): Promise<void> {
    if (categoryId !== undefined) {
      const category = await getCategoryById(categoryId);
      setCategory(category);
    }
  }

  useEffect(() => {
    if (params === null || params.id === undefined || isNaN(+params.id)) {
      navigate("/404");
    } else {
      setCategoryId(params.id);
    }
  }, [params]);

  useEffect(() => {
    fetchCategory();
  }, [categoryId]);

  return category !== undefined ? (
    <Wrapper>
      <Breadcrumb
        options={[
          { title: "Home", redirect: "/" },
          { title: `Category - ${category.name}` },
        ]}
      ></Breadcrumb>
      <Title>Category name: {category.name}</Title>
      <Header>
        <span>Products</span>
        <Button onClick={() => setIsModalOpened(true)}>Add</Button>
      </Header>
      <ProductsTable products={category.products} />
      {isModalOpened && (
        <AddProductModal
          categoryId={category.id}
          onClose={() => setIsModalOpened(false)}
        />
      )}
    </Wrapper>
  ) : (
    <div>Something seems to be wrong...</div>
  );
};
