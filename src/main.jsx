import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./global-styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <div>
    <GlobalStyle />
    <App />
  </div>
  //</React.StrictMode>
);
