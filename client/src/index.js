import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import dotenv from "dotenv";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import theme from "./theme.js";

dotenv.config();

export let baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
    <Auth0Provider
      domain="dev-zqmpe2rk.us.auth0.com"
      clientId="fY7Jrp1tLWX3hLk4bmger0CK1huTGPOj"
      // redirectUri={window.location.origin}
      redirectUri="https://pf-wellness.vercel.app/"
    >
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <ChakraProvider>
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              <App />
            </ChakraProvider>
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    </Auth0Provider>
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
