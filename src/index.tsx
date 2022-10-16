import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { App } from "./App";
import { GlobalStyle } from "App.styles";

const client = new ApolloClient({
  uri: "https://sample-shop.up.railway.app/graphql", // maybe can be moved to a .env
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <GlobalStyle />
        <App />
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>
);
