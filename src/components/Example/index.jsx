import React from "react";
import "./styles.css";
import data from "./data";

const Example1 = () => {
  return (
    <div id="example">
      {data.map(({ name, icon }, index) => (
        <div className="item" key={index}>
          {icon}
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Example1;
