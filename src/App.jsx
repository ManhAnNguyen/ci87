import React, { createContext } from "react";
import GrandParent from "./components/GrandParent";

const name = "mindX";

export const AppContext = createContext(null);

const App = () => {
  return (
    <>
      <AppContext.Provider
        value={{
          name,
          age: 19,
          address: "HN",
        }}
      >
        <GrandParent />
      </AppContext.Provider>
    </>
  );
};

export default App;

//context -> global state
