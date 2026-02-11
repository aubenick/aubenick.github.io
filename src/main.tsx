import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.tsx";
import SimpleApp from "./Components/Simple.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { newDeck } from "./utils.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/simple" element={<SimpleApp deck={newDeck()} />} />
      <Route path="/map" element={<div>Map Page (WIP)</div>} />
    </Routes>
  </BrowserRouter>,
);
