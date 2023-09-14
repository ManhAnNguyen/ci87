import React, { useEffect, useRef, useState } from "react";
import "./app.css";

let intervalId;

const arr = ["green", "yellow", "red"];
//auto batching

const App = () => {
  const [time, setTime] = useState("");
  const [start, setStart] = useState({
    _start: false,
    _index: 0,
  });

  useEffect(() => {
    if (!start._start) return;
    intervalId = setInterval(() => {
      setTime(time - 1);
      if (time <= 1) {
        setStart({ _start: false, _index: 3 });
        clearInterval(intervalId);
        return;
      }

      if (time > 10) {
        setStart({ ...start, _index: 1 });
      } else {
        setStart({ ...start, _index: 2 });
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [start._start, time]);

  return (
    <div>
      <div>
        {start._start && <h1>{time}</h1>}
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(+e.target.value)}
        />
        <button onClick={() => setStart({ ...start, _start: true })}>
          Start
        </button>
      </div>

      <div className="light-container">
        {arr.map((item, i) => (
          <div
            className="light"
            key={item}
            style={{
              background: i + 1 === start._index ? item : "gray",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;

// import React from "react";

// const App = () => {
//   return <div>App</div>;
// };

// export default App;
