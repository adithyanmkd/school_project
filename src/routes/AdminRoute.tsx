// src/routes/AdminRoute.jsx
import { Routes, Route } from "react-router-dom";
import React from "react";

// Import pages
import Home from "../pages/Home";
import AttendanceMarking from "../pages/AttandanceMarking";
import AttendanceReport from "../pages/AttendenceReport"; // Add this import

// Import layout
import AdminLayout from "../layouts/AdminLayout";

interface AdminRouteProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AdminRoute = ({ theme, setTheme }: AdminRouteProps) => {
  return (
    <Routes>
      <Route element={<AdminLayout theme={theme} setTheme={setTheme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/attendance/mark" element={<AttendanceMarking />} />
        <Route path="/attendance/reports" element={<AttendanceReport />} />{" "}
        {/* Update this route */}
        <Route path="/attendance/settings" element={<div>Settings Page</div>} />
        <Route path="/tracking" element={<div>Tracking Page</div>} />
        <Route path="/academic" element={<div>Academic Page</div>} />
        <Route path="/academic/grades" element={<div>Grades Page</div>} />
        <Route path="/students" element={<div>Students Page</div>} />
        <Route
          path="/contact-teacher"
          element={<div>Contact Teacher Page</div>}
        />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
