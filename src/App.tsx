import React from "react";
import { Routes } from "./routes";
import { Container, Footer, Header, Main } from "App.styles";

export const App: React.FC = () => {
  return (
    <Container>
      <Header>Cyral Front-end Technical Assessment</Header>
      <Main>
        <Routes />
      </Main>
      {/* <Footer>
        Made with 💙 by &nbsp;
        <a href="https://github.com/jeangeorge">Jean George</a>
      </Footer> */}
    </Container>
  );
};
