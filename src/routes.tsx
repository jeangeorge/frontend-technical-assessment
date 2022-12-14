import React from "react";
import { Routes as Router, Route } from "react-router-dom";

import {
  HomePage,
  CategoryPage,
  NotFoundPage,
  ProductDetailsPage,
} from "./pages";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Router>
  );
};
