import React, { useState } from "react";

const Input = ({ valInput }) => {
  const [val, setVal] = useState("");

  valInput = val;
  return (
    <div>
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
