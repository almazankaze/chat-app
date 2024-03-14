import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.scss";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyleSheetManager
          shouldForwardProp={isPropValid}
          disableVendorPrefixes={false}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StyleSheetManager>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
