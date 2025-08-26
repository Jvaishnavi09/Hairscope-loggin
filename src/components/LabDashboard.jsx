import React from "react";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

const LabDashboard = ({ onExit, timeLeft, setTimeLeft, onTimeout }) => {
  const navigate = useNavigate();

  const handleTimeout = () => {
    localStorage.removeItem("authToken");
    localStorage.setItem("blocked", "true");
    localStorage.setItem("isLoggedIn", "false");
    onTimeout?.();
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">🔬 Welcome to the Lab</h1>

      {/* ✅ Pass both props */}
      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        onTimeout={handleTimeout}
      />

      <button
        onClick={onExit}
        className="mt-6 px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
      >
        Exit
      </button>
    </div>
  );
};

export default LabDashboard;
