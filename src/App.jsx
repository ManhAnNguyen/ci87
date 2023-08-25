import { memo, useRef, useState } from "react";

const App = () => {
  const [persons, setPersons] = useState(["A", "B", "C"]);
  const [value, setValue] = useState("");
  const [showName, setShowName] = useState(false);

  const handleAdd = () => {
    setPersons([...persons, value]);
    setValue("");
  };

  return (
    <>
      <p>Username</p>
      <input />
      <p>Password</p>

      <input />
      <p>Confirm password</p>

      <input />
      <button>Register</button>
    </>
  );
};

export default App;
