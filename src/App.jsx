import React, { useRef, useState } from "react";
import data from "./data.json";
import "./app.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const p = {
  name: "a",
};

const { name } = p;
p.name = "c";

console.log(name);

const App = () => {
  return <></>;
};

export default App;
