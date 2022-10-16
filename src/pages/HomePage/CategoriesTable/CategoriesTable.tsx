import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Category } from "types";

import { getCategories } from "services";

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
  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();

  async function fetchCategories(): Promise<void> {
    const categories = await getCategories();
    setCategories(categories);
  }

  function handleClickRow(id: string): void {
    navigate(`/category/${id}`);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

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
