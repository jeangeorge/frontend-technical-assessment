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
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

export const Header = styled.header`
  background: lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Footer = styled.footer`
  width: 100%;
  background: PapayaWhip;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
