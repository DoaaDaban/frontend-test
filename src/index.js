import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-rg8ut0bf.us.auth0.com"
    clientId="bm9Bik5ZNDD0GyDpnh5mcqHt0Y6kTXyj"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);