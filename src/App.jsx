import React, { useState, useEffect } from "react";
import LoginScreen from "./components/LoginScreen";
import LabDashboard from "./components/LabDashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("timeLeft");
    return savedTime ? parseInt(savedTime, 10) : 600; // default 10 mins
  });
  const [isLocked, setIsLocked] = useState(
    () => localStorage.getItem("blocked") === "true"
  );

  // keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft);
  }, [timeLeft]);

  useEffect(() => {
    localStorage.setItem("blocked", isLocked);
  }, [isLocked]);

  const handleLogin = () => {
    setIsLoggedIn(true);

    // only reset timer if it's the very first login
    if (!localStorage.getItem("timeLeft")) {
      setTimeLeft(600);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          !isLoggedIn ? (
            <LoginScreen
              onLogin={handleLogin}
              timeLeft={timeLeft}
              isLocked={isLocked}
            />
          ) : (
            <LabDashboard
              onExit={() => setIsLoggedIn(false)}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              onTimeout={() => {
                setIsLoggedIn(false);
                setIsLocked(true);
              }}
            />
          )
        }
      />
    </Routes>
  );
}

export default App;
