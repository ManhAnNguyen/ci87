import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../components/CustomLink";
import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
let valInput = "";
const Home = () => {
  const ref = useRef(null);
  return (
    <div>
      Home
      <Input valInput={valInput} />
      <Button valInput={valInput} />
    </div>
  );
};

export default Home;
