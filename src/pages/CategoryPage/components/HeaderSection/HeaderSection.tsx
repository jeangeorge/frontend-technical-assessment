import React from "react";
import { useCategoryPage } from "hooks";
import { Button } from "components";
import { Title, AddSection, Wrapper } from "./HeaderSection.styles";

export const HeaderSection: React.FC = () => {
  const { category, setIsModalOpened } = useCategoryPage();

  return (
    <Wrapper>
      <Title>Category name: {category.name}</Title>
      <AddSection>
        <Title>Products</Title>
        <Button onClick={() => setIsModalOpened(true)}>Add</Button>
      </AddSection>
    </Wrapper>
  );
};
