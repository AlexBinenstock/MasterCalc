import "./CountDown.scss";

import React, { Fragment } from "react";
import { Paper, ButtonGroup, Button, TextField } from "@material-ui/core";
import { useState } from "react";

const CountDown = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const recursiveTimer = () => {
    let hoursX = Math.abs(hours);
    let minX = Math.abs(minutes);
    let secX = Math.abs(seconds);

    if (hoursX === 0 && minX === 0 && secX === 0) {
      return;
    }
    if (secX === 0) {
      if (minX === 0) {
        if (hoursX === 0) {
          return;
        } else {
          setHours(hoursX - 1);
          setMinutes(59);
          setSeconds(59);
        }
      } else {
        setMinutes(minX - 1);
        setSeconds(59);
      }
    } else {
      setSeconds(secX - 1);
    }
  };

  const startTimer = () => {
    setIsEditMode(false);
    useEffect(() => {
      setInterval(recursiveTimer, 2000);
    });
  };
  return (
    <div className="count-container">
      <Paper style={{ padding: "8px 12px" }}>
        <div>COUNTDOWN COMPONENT</div>
        {isEditMode ? (
          <div>
            <TextField
              id="hours"
              label="Hours"
              type="number"
              className={"count-input"}
              onChange={(event) => setHours(event.target.value)}
            />
            <TextField
              id="minutes"
              label="Minutes"
              type="number"
              className={"count-input"}
              onChange={(event) => setMinutes(event.target.value)}
            />
            <TextField
              id="seconds"
              label="Seconds"
              type="number"
              className={"count-input"}
              onChange={(event) => setSeconds(event.target.value)}
            />
          </div>
        ) : (
          <Fragment>
            <span className="hours">{hours < 1 ? "00" : hours}</span>
            <span>:</span>
            <span className={"minutes"}>{minutes < 1 ? "00" : minutes}</span>
            <span>:</span>
            <span className={"seconds"}>{seconds < 1 ? "00" : seconds}</span>
          </Fragment>
        )}
        <div>
          <ButtonGroup
            color="primary"
            aria-label="outlined secondary button group"
            className={"count-buttons"}
          >
            <Button
              onClick={() => setIsEditMode(true)}
              variant="outlined"
              color="secondary"
            >
              Edit
            </Button>
            <Button variant="outlined" color="secondary" onClick={startTimer}>
              Start
            </Button>
          </ButtonGroup>
          <Fragment>
            <span className="hours">{hours}</span>
            <span>:</span>
            <span className={"minutes"}>{minutes}</span>
            <span>:</span>
            <span className={"seconds"}>{seconds}</span>
          </Fragment>
        </div>
      </Paper>
    </div>
  );
};

export default CountDown;
