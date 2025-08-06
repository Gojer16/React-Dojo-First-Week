import  { useEffect, useState } from 'react'

export const useTimer = () => {
const [time, setTime] = useState(0); 
const [isRunning, setIsRunning] = useState(false);
const [startTimestamp, setStartTimestamp] = useState(null);
const [hasLoaded, setHasLoaded] = useState(false);

useEffect(() => {
  const savedTime = parseInt(localStorage.getItem("timerTime") || "0", 10);
  const savedIsRunning = localStorage.getItem("isRunning") === "true";
  const savedStartTimestamp = localStorage.getItem("startTimestamp");

  setTime(savedTime);
  setIsRunning(savedIsRunning);
  setStartTimestamp(savedIsRunning && savedStartTimestamp ? parseInt(savedStartTimestamp, 10) : null);

  setHasLoaded(true);
}, []);

useEffect(() => {
  if (!hasLoaded) return;

  localStorage.setItem("timerTime", time.toString());
  localStorage.setItem("isRunning", isRunning.toString());
  if (startTimestamp !== null) {
    localStorage.setItem("startTimestamp", startTimestamp.toString());
  } else {
    localStorage.removeItem("startTimestamp");
  }
}, [time, isRunning, startTimestamp, hasLoaded]);

useEffect(() => {
  if (!isRunning) return;

  const tick = () => {
    const now = Date.now();
    setTime(Math.floor((now - startTimestamp) / 1000));
  };

  tick();

  const interval = setInterval(tick, 1000);

  return () => clearInterval(interval);
}, [isRunning, startTimestamp]);

const handleStart = () => {
  if (!isRunning) {
    setStartTimestamp(Date.now() - time * 1000);
    setIsRunning(true);
  }
};

const handlePause = () => {
  if (isRunning) {
    setIsRunning(false);
    setStartTimestamp(null);
  }
};

const resetHandler = () => {
  setIsRunning(false);
  setTime(0);
  setStartTimestamp(null);
  localStorage.removeItem("timerTime");
  localStorage.removeItem("isRunning");
  localStorage.removeItem("startTimestamp");
};


  return {
    time,
    isRunning,
    start: handleStart,
    pause: handlePause,
    reset: resetHandler
  };
};


