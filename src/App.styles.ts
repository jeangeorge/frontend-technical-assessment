import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.header`
  background: lightslategray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  color: white;
  padding: 20px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  padding-left: 80px;
  padding-right: 80px;
  align-items: center;
  font-size: 16px;
`;

export const Footer = styled.footer`
  width: 100%;
  background: lightslategray;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  padding: 10px;

  a:visited {
    color: black;
  }

  a {
    color: black;
  }
`;
