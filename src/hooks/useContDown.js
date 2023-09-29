import { useCallback, useEffect, useRef, useState } from "react";

function useCountDown(start, end, action) {
  //status : [null,not yet, live ,end]
  const [status, setStatus] = useState(null);
  const [timer, setTimter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //ref for variables interval
  const timerRef = useRef(null);

  const handleTimer = useCallback((duration) => {
    //use Math.floor to round down
    const days = Math.floor(duration / (24 * 60 * 60 * 1000));

    //divide and get the remainder to another unit
    const hours = Math.floor(
      (duration % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((duration % (60 * 1000)) / 1000);
    setTimter({
      days,
      hours,
      minutes,
      seconds,
    });
  }, []);

  useEffect(() => {
    if (!start || !end) return;

    if (action === "start") {
      timerRef.current = setInterval(() => {
        const startUnix = new Date(start).getTime();
        const endUnix = new Date(end).getTime();
        const currentUnix = new Date().getTime();

        if (currentUnix < startUnix) {
          setStatus("not yet");
          handleTimer(startUnix - currentUnix);
        } else if (currentUnix < endUnix) {
          setStatus("live");
          handleTimer(endUnix - currentUnix);
        } else {
          //if end -> stop interval
          setStatus("end");
          clearInterval(timerRef.current);
        }
      }, 1000);
    }

    //clean up function
    return () => clearInterval(timerRef.current);
  }, [start, end, handleTimer, action]);

  return { status, timer };
}

export default useCountDown;
