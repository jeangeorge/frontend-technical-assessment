import styled from "styled-components";

interface TableHeaderRowProps {
  height?: string;
}

export const TableHeaderRow = styled.tr<TableHeaderRowProps>`
  height: ${(p) => p.height ?? "60px"};
`;
