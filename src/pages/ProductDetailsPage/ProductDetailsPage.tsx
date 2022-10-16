import { Breadcrumb, Button } from "components";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, removeProduct, saveProduct } from "services";
import { Product } from "types";
import {
  ButtonsSection,
  ProductSection,
  Wrapper,
} from "./ProductDetailsPage.styles";

export const ProductDetailsPage: React.FC = () => {
  const [productId, setProductId] = useState<string>();
  const [product, setProduct] = useState<Product>();
  const [isRequesting, setIsRequesting] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  async function fetchProduct(): Promise<void> {
    if (productId !== undefined) {
      setIsRequesting(true);
      const product = await getProductById(productId);
      setIsRequesting(false);
      setProduct(product);
    }
  }

  async function increaseStock(): Promise<void> {
    if (product != null) {
      setIsRequesting(true);
      const saved = await saveProduct({ ...product, stock: product.stock + 1 });
      setIsRequesting(false);
      if (saved) {
        fetchProduct();
      }
    }
  }

  async function decreaseStock(): Promise<void> {
    if (product != null) {
      setIsRequesting(true);
      const saved = await saveProduct({ ...product, stock: product.stock - 1 });
      setIsRequesting(false);
      if (saved) {
        fetchProduct();
      }
    }
  }

  async function deleteProduct(): Promise<void> {
    if (product != null) {
      const confirmed = confirm(
        "Are you sure you want to remove this product?"
      );
      if (confirmed) {
        setIsRequesting(true);
        const deleted = await removeProduct(product.id);
        if (deleted) {
          navigate(`/category/${product.category_id}`);
        }
        setIsRequesting(false);
      }
    }
  }

  useEffect(() => {
    if (params === null || params.id === undefined || isNaN(+params.id)) {
      navigate("/404");
    } else {
      setProductId(params.id);
    }
  }, [params]);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

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
        <Button disabled={isRequesting} onClick={increaseStock}>
          Increase stock
        </Button>
        <Button
          disabled={isRequesting || product.stock === 0}
          onClick={decreaseStock}
        >
          Decrease stock
        </Button>
        <Button disabled={isRequesting} onClick={deleteProduct}>
          Delete product
        </Button>
      </ButtonsSection>
    </Wrapper>
  ) : (
    <div>Something seems to be wrong...</div>
  );
};
