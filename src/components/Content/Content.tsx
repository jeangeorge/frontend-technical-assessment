import React from "react";
import { Wrapper } from "./Content.styles";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
