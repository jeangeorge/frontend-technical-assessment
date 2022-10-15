import React from "react";
import { Routes as ReactRouter, Route } from "react-router-dom";
import { Home, Category, NotFound } from "./pages";

export const Routes: React.FC = () => {
  return (
    <ReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </ReactRouter>
  );
};
