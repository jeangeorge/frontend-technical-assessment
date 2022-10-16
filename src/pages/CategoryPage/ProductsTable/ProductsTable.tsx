import React from "react";
import { useNavigate } from "react-router-dom";

import { Product } from "types";

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

interface ProductsTableProps {
  products: Product[];
}

export const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  const navigate = useNavigate();

  function handleClickRow(id: number): void {
    navigate(`/product/${id}`);
  }

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
          {products.map((product) => (
            <TableBodyRow
              key={`product-${product.id}`}
              onClick={() => handleClickRow(product.id)}
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
