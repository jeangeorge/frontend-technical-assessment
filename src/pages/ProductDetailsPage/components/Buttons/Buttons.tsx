import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { REMOVE_PRODUCT, UPDATE_PRODUCT } from "graphql/mutations";
import {
  RemoveProductResponse,
  UpdateProductResponse,
} from "graphql/responses";
import {
  RemoveProductVariables,
  UpdateProductVariables,
} from "graphql/variables";

import { Button } from "components";
import { useProductDetailsPage } from "hooks";

import { Wrapper } from "./Buttons.styles";

export const Buttons: React.FC = () => {
  const { loading, product, getProduct } = useProductDetailsPage();
  const navigate = useNavigate();

  const [updateProduct, { loading: updateLoading }] = useMutation<
    UpdateProductResponse,
    UpdateProductVariables
  >(UPDATE_PRODUCT, {
    onCompleted(data) {
      if (data.updateProduct.id !== undefined) {
        getProduct({ variables: { filter: { id: data.updateProduct.id } } });
      }
    },
    onError() {
      alert("Unable to update the product, please try again.");
    },
  });

  const [removeProduct, { loading: removeLoading }] = useMutation<
    RemoveProductResponse,
    RemoveProductVariables
  >(REMOVE_PRODUCT, {
    onCompleted(data) {
      navigate(`/category/${data.removeProduct.category_id}`);
    },
    onError() {
      alert("Unable to remove the product, please try again.");
    },
  });

  const disabled = useMemo(
    () => loading || removeLoading || updateLoading,
    [loading, removeLoading, updateLoading]
  );

  async function increaseStock(): Promise<void> {
    if (product !== undefined) {
      await updateProduct({
        variables: { updateProductId: product.id, stock: product.stock + 1 },
      });
    }
  }

  async function decreaseStock(): Promise<void> {
    if (product !== undefined) {
      await updateProduct({
        variables: { updateProductId: product.id, stock: product.stock - 1 },
      });
    }
  }

  async function deleteProduct(): Promise<void> {
    if (product !== undefined) {
      const confirmed = confirm(
        "Are you sure you want to remove this product?"
      );
      if (confirmed) {
        await removeProduct({ variables: { removeProductId: product.id } });
      }
    }
  }

  if (product === undefined) return null;

  return (
    <Wrapper>
      <Button disabled={disabled} onClick={increaseStock}>
        Increase stock
      </Button>
      <Button
        disabled={disabled || product.stock === 0}
        onClick={decreaseStock}
      >
        Decrease stock
      </Button>
      <Button disabled={disabled} onClick={deleteProduct}>
        Remove product
      </Button>
    </Wrapper>
  );
};
