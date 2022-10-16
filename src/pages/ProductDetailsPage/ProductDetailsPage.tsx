import { useLazyQuery, useMutation } from "@apollo/client";
import { Breadcrumb, Button, Spinner } from "components";
import { REMOVE_PRODUCT, UPDATE_PRODUCT } from "graphql/mutations";
import { ALL_PRODUCTS } from "graphql/queries";
import {
  AllProductsResponse,
  RemoveProductResponse,
  UpdateProductResponse,
} from "graphql/responses";
import {
  AllProductsVariables,
  RemoveProductVariables,
  UpdateProductVariables,
} from "graphql/variables";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "types";
import {
  ButtonsSection,
  ProductSection,
  Wrapper,
} from "./ProductDetailsPage.styles";

export const ProductDetailsPage: React.FC = () => {
  const [productId, setProductId] = useState<number>();
  const [product, setProduct] = useState<Product>();

  const [getProduct, { loading, error, data }] = useLazyQuery<
    AllProductsResponse,
    AllProductsVariables
  >(ALL_PRODUCTS);

  const [updateProduct, { loading: updateLoading }] = useMutation<
    UpdateProductResponse,
    UpdateProductVariables
  >(UPDATE_PRODUCT, {
    onCompleted(data) {
      if (data.updateProduct.id !== undefined) {
        getProduct({ variables: { filter: { id: data.updateProduct.id } } });
      }
    },
  });

  const [removeProduct, { loading: removeLoading, error: removeError }] =
    useMutation<RemoveProductResponse, RemoveProductVariables>(REMOVE_PRODUCT);

  const params = useParams();
  const navigate = useNavigate();

  async function increaseStock(): Promise<void> {
    if (product != null) {
      await updateProduct({
        variables: { updateProductId: product.id, stock: product.stock + 1 },
      });
    }
  }

  async function decreaseStock(): Promise<void> {
    if (product != null) {
      await updateProduct({
        variables: { updateProductId: product.id, stock: product.stock - 1 },
      });
    }
  }

  async function deleteProduct(): Promise<void> {
    if (product != null && productId !== undefined) {
      const confirmed = confirm(
        "Are you sure you want to remove this product?"
      );
      if (confirmed) {
        await removeProduct({ variables: { removeProductId: productId } });
        navigate(`/category/${product.category_id}`);
      }
    }
  }

  useEffect(() => {
    if (params === null || params.id === undefined || isNaN(+params.id)) {
      navigate("/404");
    } else {
      setProductId(+params.id);
    }
  }, [params]);

  useEffect(() => {
    if (productId !== undefined) {
      getProduct({ variables: { filter: { id: productId } } });
    }
  }, [productId]);

  useEffect(() => {
    if (data !== undefined) {
      setProduct(data.allProducts[0]);
    }
  }, [data]);

  if (loading || removeLoading) return <Spinner />;
  if (error != null)
    return (
      <span>There was an error fetching the product, please try again.</span>
    );
  if (removeError != null)
    return (
      <span>There was an error deleting the product, please try again.</span>
    );

  return product !== undefined ? (
    <Wrapper>
      <Breadcrumb
        options={[
          { title: "Home", redirect: "/" },
          { title: `Product  - ${product.name}` },
        ]}
      ></Breadcrumb>
      <ProductSection>
        <span>Product name: {product.name}</span>
        <span>Description: {product.description}</span>
        <span>Color: {product.color}</span>
        <span>Stock: {product.stock}</span>
        <span>Price: {product.price}</span>
      </ProductSection>
      <ButtonsSection>
        <Button disabled={loading || updateLoading} onClick={increaseStock}>
          Increase stock
        </Button>
        <Button
          disabled={loading || updateLoading || product.stock === 0}
          onClick={decreaseStock}
        >
          Decrease stock
        </Button>
        <Button disabled={loading || updateLoading} onClick={deleteProduct}>
          Remove product
        </Button>
      </ButtonsSection>
    </Wrapper>
  ) : (
    <div>No product found.</div>
  );
};
