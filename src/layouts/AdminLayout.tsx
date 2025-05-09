// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/organisms/Sidebar";
import { DarkThemeToggle } from "flowbite-react"; // Add for theme toggle
import React from "react";

interface AdminLayoutProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AdminLayout = ({ theme, setTheme }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="flex justify-end p-4">
        <DarkThemeToggle
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
      <Sidebar />
      <main className="p-4 sm:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
