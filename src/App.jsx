import React, { useState } from "react";

//closure  : tạo 1 hàm trong 1 hàm khác
const App = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    //closure
    // setCount(0 + 1);
    // setCount(0 + 1);
  };

  console.log(count);
  return (
    <>
      <button onClick={onClick}>Switch</button>
    </>
  );
};

export default App;

//VDOM : diff<xd khi nào cập nhật> va reconcinlation algorithm <cập nhật như nào>
