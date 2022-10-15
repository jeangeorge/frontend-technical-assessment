import React from "react";
import { Header, Footer } from "components";
import { Routes } from "./routes";
import { Container } from "styles";

export const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <section>
        <Routes />
      </section>
      <Footer />
    </Container>
  );
};
