import React, { useState, useEffect } from "react";
import "./App.css";

const Timer = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState("0" + 0);

  const [quarter, setQuarter] = useState(1);

  function timerReset() {
    setMinutes(15);
    setSeconds("0" + 0);
  }

  useEffect(() => {
    let interval = 0;

    interval = setInterval(() => {
      if (minutes === 0 && seconds === "0" + 0) {
        timerReset();
      } else if (seconds === "0" + 0) {
        setSeconds(59);
        setMinutes(minutes => minutes - 1);
      } else if (seconds <= 10) {
        setSeconds(seconds => "0" + (seconds - 1));
      } else {
        setSeconds(seconds => seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
    //     <div className="timerButton">
    //     <button className="awayButtons__touchdown">Reset Timer</button>
    //   </div>
  );
};

export default Timer;
