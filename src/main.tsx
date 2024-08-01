import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="9c4579931e034f33a43e98e90dee7519"
      domain="https://salmandev.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? "http://new-todo-app-with-authentication.vercel.app"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? "http://new-todo-app-with-authentication.vercel.app"
          : "http://localhost:5173"
      }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
