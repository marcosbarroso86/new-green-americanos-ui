import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./routes";
import Players from "./pages/players/Players";
import { Router } from "react-router";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
        <Routes>
          <Route path="/" element={<Home/>} index/>
          <Route path="/jugadores" element={<Players />}/>
        </Routes>
  )
}

export default App;
