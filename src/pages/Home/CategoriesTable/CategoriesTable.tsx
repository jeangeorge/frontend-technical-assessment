import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Category } from "types/category";

import { getCategories } from "services/getCategories";

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
