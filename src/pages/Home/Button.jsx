import React from "react";

const Button = ({ valInput }) => {
  return (
    <div>
      <button onClick={() => console.log(valInput)}>Clickl</button>
    </div>
  );
};

export default Button;
