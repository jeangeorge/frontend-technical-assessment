import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
} from "components";
import { Category } from "types";

interface CategoriesTableProps {
  categories: Category[];
}

export const CategoriesTable: React.FC<CategoriesTableProps> = ({
  categories,
}) => {
  const navigate = useNavigate();

  function handleClickRow(id: number): void {
    navigate(`/category/${id}`);
  }

  return (
    <Table>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell>Category name</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableBodyRow
            key={`category-${category.id}`}
            onClick={() => handleClickRow(category.id)}
          >
            <TableBodyCell>{category.name}</TableBodyCell>
            <TableBodyCell>{category.description}</TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </Table>
  );
};
