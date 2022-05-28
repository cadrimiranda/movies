import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "use-http";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider url={import.meta.env.VITE_AUTH_KEY as string}>
        <Dashboard />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
