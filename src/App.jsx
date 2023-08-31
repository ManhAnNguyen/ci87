import React from "react";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log({ username, password });
  };

  return (
    <div>
      <p>Username</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Confirm password</p>
      <input />
      <p>Address</p>
      <input />
      <div>
        <button onClick={handleClick}>Onclick</button>
      </div>
    </div>
  );
};

export default App;
