// src/pages/AttendanceMarking.jsx
import { useState } from "react";

const AttendanceMarking = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
    console.log("Student Signed In:", {
      studentId: 1,
      status: "Signed In",
      timestamp: new Date(),
    });
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    console.log("Student Signed Out:", {
      studentId: 1,
      status: "Signed Out",
      timestamp: new Date(),
    });
  };

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Single Student Attendance
      </h1>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Mark the attendance for a single student by clicking "Sign In" or "Sign
        Out".
      </p>

      <div className="flex space-x-2">
        <button
          onClick={handleSignIn}
          disabled={isSignedIn}
          className={`rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
            isSignedIn
              ? "cursor-not-allowed bg-green-400 dark:bg-green-500"
              : "bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          }`}
        >
          Sign In
        </button>
        <button
          onClick={handleSignOut}
          disabled={!isSignedIn}
          className={`rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
            !isSignedIn
              ? "cursor-not-allowed bg-red-400 dark:bg-red-500"
              : "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          }`}
        >
          Sign Out
        </button>
      </div>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Status: {isSignedIn ? "Signed In" : "Signed Out"}
      </p>
    </div>
  );
};

export default AttendanceMarking;
