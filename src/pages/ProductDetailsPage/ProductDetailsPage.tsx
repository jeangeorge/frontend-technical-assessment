import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

import { Breadcrumb, Error, Spinner } from "components";
import { ProductDetailsPageContext } from "contexts";
import { Product } from "types";

import { ALL_PRODUCTS } from "graphql/queries";
import { AllProductsResponse } from "graphql/responses";
import { AllProductsVariables } from "graphql/variables";

import { Buttons, Details } from "./components";
import { Wrapper } from "./ProductDetailsPage.styles";

export const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<Product>();

  const [getProduct, { loading, error, data }] = useLazyQuery<
    AllProductsResponse,
    AllProductsVariables
  >(ALL_PRODUCTS);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params === null || params.id === undefined || isNaN(+params.id)) {
      navigate("/404");
    } else {
      getProduct({ variables: { filter: { id: +params.id } } });
    }
  }, [params]);

  useEffect(() => {
    if (data !== undefined) {
      setProduct(data.allProducts[0]);
    }
  }, [data]);

  if (loading) return <Spinner />;

  if (error != null)
    return (
      <Error message="There was an error fetching the product, please try again."></Error>
    );

  if (product === undefined) return <Error message="No product found."></Error>;

  return (
    <ProductDetailsPageContext.Provider
      value={{ loading, product, getProduct }}
    >
      <Wrapper>
        <Breadcrumb
          options={[
            { title: "Home", redirect: "/" },
            { title: `Product  - ${product.name}` },
          ]}
        ></Breadcrumb>
        <Details />
        <Buttons />
      </Wrapper>
    </ProductDetailsPageContext.Provider>
  );
};
