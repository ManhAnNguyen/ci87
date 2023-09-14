import React, { useState } from "react";
import "./app.css";

const circle = ["red", "yellow", "green"];
const App = () => {
  const [current, setCurrent] = useState(0);

  const onClick = () => {
    setCurrent(current === 3 ? 1 : current + 1);
  };
  return (
    <div>
      {circle.map((item, index) => (
        <div
          className="circle"
          key={index}
          style={{
            background: index + 1 === current ? item : "gray",
          }}
        ></div>
      ))}
      <input placeholder="Start" />
      <input placeholder="Yellow" />
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default App;
