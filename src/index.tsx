import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

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

console.log(process.env.NODE_ENV);

root.render(
  <React.StrictMode>
    <BrowserRouter
      basename={
        process.env.NODE_ENV !== "development"
          ? process.env.PUBLIC_URL
          : undefined
      }
    >
      <ApolloProvider client={client}>
        <GlobalStyle />
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
