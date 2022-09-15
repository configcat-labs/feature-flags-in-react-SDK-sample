import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ConfigCatProvider } from "configcat-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigCatProvider sdkKey='fK7ZCApWbkaDu14njPKZQw/s9XWupU5K0KRp_9PvkU02g'>
      <App />
    </ConfigCatProvider>
  </React.StrictMode>
);
