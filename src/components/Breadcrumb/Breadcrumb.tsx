import React from "react";
import { Link } from "react-router-dom";
import { Option, Wrapper } from "./Breadcrumb.styles";

interface BreadcrumbProps {
  options: Array<{
    title?: string;
    redirect?: string;
  }>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ options }) => {
  return (
    <Wrapper>
      {options.map(
        (option) =>
          option.title !== undefined && (
            <Option key={option.title}>
              &nbsp;
              {option.redirect !== undefined ? (
                <Link to={option.redirect}>{option.title}</Link>
              ) : (
                option.title
              )}
              &nbsp;/
            </Option>
          )
      )}
    </Wrapper>
  );
};
