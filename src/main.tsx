import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
);
