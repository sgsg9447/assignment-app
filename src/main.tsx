import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.tsx";
import "./styles/reset.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./pages/Routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </React.StrictMode>
);
