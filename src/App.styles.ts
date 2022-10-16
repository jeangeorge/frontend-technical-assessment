import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled.section`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  min-height: 100%;
`;

export const Footer = styled.footer`
  background: lightslategray;
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
