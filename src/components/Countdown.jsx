import { Typography } from "antd";
import React from "react";
import useCountDown from "../hooks/useContDown";

const CountDown = ({ startTime, endTime, action }) => {
  const {
    status,
    timer: { days, hours, seconds, minutes },
  } = useCountDown(startTime, endTime, action);

  if (!status) return <></>;
  return (
    <div className="countdown">
      <div className="text">
        <Typography
          style={{
            fontSize: "30px",
          }}
        >
          {(() => {
            switch (status) {
              case "not yet":
                return "Start in";
              case "live":
                return "End in";
              case "end":
                return "Ended";
            }
          })()}
        </Typography>
      </div>
      <div className="timer">
        <Typography>{days} d :</Typography>
        <Typography>{hours} h : </Typography>
        <Typography>{minutes} m :</Typography>
        <Typography>{seconds} s</Typography>
      </div>
    </div>
  );
};

export default CountDown;
