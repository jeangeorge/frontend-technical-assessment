import styled from "styled-components";

interface TableBodyRowProps {
  height?: string;
}

export const TableBodyRow = styled.tr<TableBodyRowProps>`
  height: ${(p) => p.height ?? "90px"};
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;
