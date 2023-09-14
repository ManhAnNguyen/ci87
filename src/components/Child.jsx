import React, { useContext } from "react";
import { AppContext } from "../App";

const Child = () => {
  const { name, age, address } = useContext(AppContext);

  return (
    <div>
      Child : {name} {age} {address}
    </div>
  );
};

export default Child;
