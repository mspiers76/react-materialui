import React from "react";
import ReactDOM from "react-dom";
// Internal styles
import "./index.scss";
//Components
import App from "./components/App";
// External component libraries
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
