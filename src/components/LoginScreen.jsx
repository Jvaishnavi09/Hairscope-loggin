import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFingerprint } from "react-icons/fa";

const LoginScreen = ({ onLogin, timeLeft, isLocked }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [animate, setAnimate] = useState(false);
  const [open, setOpen] = useState(false);
  const segments = 8;

  const totalTime = 600; // 10 min
  const timePerSegment = totalTime / segments;
  // Calculate how many segments are "filled"
  const elapsed = totalTime - timeLeft;
  const filledBlocks = Math.ceil(timeLeft / timePerSegment);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    if (isLocked) {
      alert("⛔ Your session expired. You cannot log in again.");
      return;
    } else if (password === "1234") {
      setError("");
      setOpen(true);
      setAnimate(true);
      setTimeout(() => {
        onLogin();
      }, 1500);
    } else {
      setError("❌ Incorrect password");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-gray-900 overflow-hidden relative">
      {/* 🔹 Left Door */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-gray-900 border-l border-2 border-brandCyan shadow-[0_10px_40px_#00ffe0]"
        initial={{ x: 0 }}
        animate={open ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* 🔹 Right Door */}
      <motion.div
        className="flex flex-col justify-center absolute top-0 right-0 w-1/2 h-full bg-gray-900 border-l border-2 border-brandCyan shadow-[0_10px_40px_#00ffe0]"
        initial={{ x: 0 }}
        animate={open ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          {/* Battery Body */}
          <div className="w-24 h-48  rounded-lg flex flex-col justify-end p-2">
            {[...Array(segments)].map((_, i) => {
              // ✅ Fill from bottom
              const isFilled = i >= segments - filledBlocks;

              return (
                <div
                  key={i}
                  style={{ height: `${100 / segments}%` }}
                  className={`w-full mb-1 last:mb-0  border ${
                    isFilled
                      ? "bg-[#00ccb3] border-cyan-400"
                      : "bg-transparent border-gray-500"
                  }`}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 text-center">
          <p className="px-4 text-4xl font-bold text-brandCyan drop-shadow-lg">
            ⏱ Time : 10 Minutes
          </p>
          <p className="text-lg text-gray-300 italic">
            {timeLeft < 600 && !isLocked && (
              <>
                You still have {Math.floor(timeLeft / 60)}m{" "}
                {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}s left
              </>
            )}
          </p>
        </div>
      </motion.div>

      {/* 🔹 Login Circle */}
      <motion.div
        className="w-[350px] h-[350px] rounded-full bg-black border-2 border-brandCyan shadow-[0_0_40px_#00ffe0] flex flex-col items-center justify-center p-6 relative z-10"
        animate={animate ? { rotate: 360, scale: 0, opacity: 0 } : {}}
        transition={{ duration: 2 }}
      >
        <FaFingerprint className="text-brandCyan h-[50px] w-[50px] mb-4 " />

        <h2 className="text-brandCyan text-lg font-semibold mb-6 text-center">
          Enter Your Ziopps Password
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-2/3"
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-3 py-2 mb-4 text-center bg-transparent border border-cyan-500 text-brandCyan placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandCyan"
          />

          <button
            type="submit"
            className="w-full py-2 bg-cyan-100 rounded-xs text-black font-bold hover:bg-[#00ccb3] transition duration-300"
            onClick={handleLogin}
          >
            Enter Lab
          </button>
        </form>
      </motion.div>

      {/* 🔹 Error */}
      {error && <p className="text-red-400 relative z-10">{error}</p>}
    </div>
  );
};

export default LoginScreen;
