import styled from "styled-components";

export const Button = styled.button`
  background-color: lightslategray;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: none;
  border-radius: 8px;

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
    background-color: lightgray;
  }
`;
