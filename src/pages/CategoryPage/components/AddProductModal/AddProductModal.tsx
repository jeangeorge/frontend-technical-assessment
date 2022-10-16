import React, { useContext } from "react";
import { useMutation } from "@apollo/client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { NumericFormat } from "react-number-format";

import { CREATE_PRODUCT } from "graphql/mutations";
import { CreateProductVariables } from "graphql/variables";
import { CreateProductResponse } from "graphql/responses";

import { CategoryPageContext } from "contexts";
import { Button, Error, Spinner } from "components";

import {
  Wrapper,
  Header,
  Content,
  Form,
  FormGroup,
  Input,
  Label,
} from "./AddProductModal.styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  color: Yup.string().required("Required"),
  stock: Yup.number().min(1).required("Required"),
  price: Yup.number().min(0.1).required("Required"),
});

export const AddProductModal: React.FC = () => {
  const { category, getCategory, isModalOpened, setIsModalOpened } =
    useContext(CategoryPageContext);

  const [createProduct, { loading, error }] = useMutation<
    CreateProductResponse,
    CreateProductVariables
  >(CREATE_PRODUCT);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      color: "",
      stock: 0,
      price: 0,
    },
    validationSchema,
    onSubmit: async (values) => {
      await createProduct({
        variables: {
          ...values,
          categoryId: category?.id,
          stock: +values.stock,
          price: +values.price,
        },
      });
      getCategory({ variables: { filter: { id: category?.id } } });
      closeModal();
    },
  });

  function closeModal(): void {
    setIsModalOpened(false);
  }

  if (loading) return <Spinner />;

  if (error != null)
    return <Error message="Unable to save, please try again." />;

  return isModalOpened ? (
    <Wrapper onClick={closeModal}>
      <Content onClick={(event) => event.stopPropagation()}>
        <Header>
          <Button onClick={closeModal}>X</Button>
        </Header>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              hasError={formik.errors.name !== undefined}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
              hasError={formik.errors.description !== undefined}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              name="color"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.color}
              hasError={formik.errors.color !== undefined}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="stock">Stock</Label>
            <NumericFormat
              id="stock"
              name="stock"
              customInput={Input}
              allowNegative={false}
              value={formik.values.stock}
              onChange={formik.handleChange}
              hasError={formik.errors.stock !== undefined}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="price">Price</Label>
            <NumericFormat
              id="price"
              name="price"
              customInput={Input}
              allowNegative={false}
              value={formik.values.price}
              onChange={formik.handleChange}
              hasError={formik.errors.price !== undefined}
            />
          </FormGroup>
          <Button type="submit" disabled={!formik.isValid || loading}>
            Submit
          </Button>
        </Form>
      </Content>
    </Wrapper>
  ) : null;
};
