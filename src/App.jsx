import Title from "./components/Title";
import Button from "./components/Button";
import { useState } from "react";

//state
//re-render và initial re-render
//

const App = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>count :{count}</h1>
      <button onClick={handleClick}>Count</button>
      {/* <p>maxium 5</p> */}
    </>
  );
};

export default App;
