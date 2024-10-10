import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
