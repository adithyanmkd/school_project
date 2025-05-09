import { DarkThemeToggle } from "flowbite-react";

import { BrowserRouter } from "react-router-dom";

import AdminRoute from "./routes/AdminRoute";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <BrowserRouter>
      <AdminRoute theme={theme} setTheme={setTheme} />
    </BrowserRouter>
  );
}

export default App;
