import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import Laptop from "./pages/Laptop";
import Tablet from "./pages/Tablet";
import "./app.css";
import CustomLink from "./components/CustomLink";

const App = () => {
  return (
    <BrowserRouter>
      <CustomLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/tablet" element={<Tablet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
