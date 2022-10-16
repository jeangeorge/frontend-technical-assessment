import React from "react";
import { useNavigate } from "react-router-dom";

import { useHomePage } from "hooks";

import {
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
} from "components";

export const CategoriesTable: React.FC = () => {
  const { data } = useHomePage();
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell>Category name</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {data?.allCategories.map((category) => (
          <TableBodyRow
            key={`category-${category.id}`}
            onClick={() => navigate(`/category/${category.id}`)}
          >
            <TableBodyCell>{category.name}</TableBodyCell>
            <TableBodyCell>{category.description}</TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </Table>
  );
};
