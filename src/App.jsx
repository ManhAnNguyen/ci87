import React, { useState } from "react";
import { Button, DatePicker, Typography } from "antd";
import dayjs from "dayjs";
import useCountDown from "./hooks/useContDown";
import CountDown from "./components/Countdown";
import "./app.css";

const { RangePicker } = DatePicker;
const App = () => {
  const [time, setTime] = useState({
    start: "",
    end: "",
  });

  //action : [start,]
  const [action, setAction] = useState(null);

  const { start, end } = time;

  return (
    <>
      <div>
        <Typography size="18">COUNTDOWN</Typography>
        <RangePicker
          size="large"
          showTime
          onChange={([start, end]) => {
            setTime({
              start: dayjs(start).format(),
              end: dayjs(end).format(),
            });
          }}
        />{" "}
        <Button
          size="large"
          type="primary"
          style={{
            marginLeft: "10px",
          }}
          onClick={() => setAction("start")}
        >
          START
        </Button>
      </div>
      <CountDown startTime={start} endTime={end} action={action} />
    </>
  );
};

export default App;
