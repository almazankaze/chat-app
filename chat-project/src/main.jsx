import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      disableVendorPrefixes={false}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyleSheetManager>
  </React.StrictMode>
);
