import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import ItemsPage from "./pages/ItemsPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/items" element={<ItemsPage />} />
    </Routes>
  );
}

export default App;
