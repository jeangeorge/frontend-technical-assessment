import React from "react";
import { useProductDetailsPage } from "hooks";
import { Wrapper } from "./Details.styles";

export const Details: React.FC = () => {
  const { product } = useProductDetailsPage();

  if (product === undefined) return null;

  return (
    <Wrapper>
      <span>Product name: {product.name}</span>
      <span>Description: {product.description}</span>
      <span>Color: {product.color}</span>
      <span>Stock: {product.stock}</span>
      <span>Price: {product.price}</span>
    </Wrapper>
  );
};
