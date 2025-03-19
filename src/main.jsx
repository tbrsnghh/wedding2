import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import App1 from "./App1";
import App from "./App"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const user = store.getState().auth.user;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

