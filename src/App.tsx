import React from "react";

import { Routes } from "./routes";

import { Container, Footer, Header, Main, Section } from "App.styles";

export const App: React.FC = () => {
  return (
    <Container>
      <Section>
        <Header>Front-end Technical Assessment</Header>
        <Main>
          <Routes />
        </Main>
      </Section>
      <Footer>
        Made with 💙 by &nbsp;
        <a href="https://github.com/jeangeorge">Jean George</a>
      </Footer>
    </Container>
  );
};
