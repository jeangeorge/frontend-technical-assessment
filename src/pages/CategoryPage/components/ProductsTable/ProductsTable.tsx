import React from "react";
import { useNavigate } from "react-router-dom";

import { useCategoryPage } from "hooks";

import {
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
} from "components";

import { Wrapper } from "./ProductsTable.styles";

export const ProductsTable: React.FC = () => {
  const { category } = useCategoryPage();

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Table>
        <TableHeader>
          <TableHeaderRow>
            <TableHeaderCell>Product name</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          {category?.Products?.map((product) => (
            <TableBodyRow
              key={`product-${product.id}`}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <TableBodyCell>{product.name}</TableBodyCell>
              <TableBodyCell>{product.description}</TableBodyCell>
            </TableBodyRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};
