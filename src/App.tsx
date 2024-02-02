import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init()
  }, [])


  return <Home />
}

export default App;
