import React, { useState, useEffect } from 'react';
import "./App.css"

function App() {
  const [timeCount, setTimeCount] = useState(0);
  const [countdownIntervalId, setCountdownIntervalId] = useState(null);

  function startCountdown() {
    clearInterval(countdownIntervalId);
    const intervalId = setInterval(() => {
      setTimeCount((prevTimeCount) => prevTimeCount - 1);
    }, 1000);
    setCountdownIntervalId(intervalId);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      const inputValue = event.target.value;
      const parsedInputValue = parseInt(inputValue, 10);
      const startingTime = isNaN(parsedInputValue) ? 0 : Math.floor(parsedInputValue);
      setTimeCount(startingTime);
      startCountdown();
    }
  }

  useEffect(() => {
    if (timeCount === 0) {
      clearInterval(countdownIntervalId);
    }
  }, [timeCount, countdownIntervalId]);

  return (
    <div>
      <input type="text" id="timeCount" onKeyDown={handleKeyDown} />
      <div id="current-time">{timeCount}</div>
    </div>
  );
}

export default App;
