import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "use-http";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import { theme } from "./theme";
import MainContextProvider from "./contexts/MainContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider
        options={{
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY as string}`,
          },
        }}
        url={"https://api.themoviedb.org/3"}
      >
        <MainContextProvider>
          <Dashboard />
        </MainContextProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
