import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Components/Homepage.tsx";
import SimpleApp from "./Components/Simple.tsx";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { newDeck } from "./utils.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/simple" element={<SimpleApp deck={newDeck()} />} />
      <Route
        path="/map"
        element={<div style={{ color: "white" }}>Map Page (WIP)</div>}
      />
    </Routes>
  </HashRouter>,
);
