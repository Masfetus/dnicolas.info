import './App.css';
import Home from './pages/Home.js'
import Header from './layout/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage'
import Footer from './layout/Footer.js';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { Fade, Row } from 'react-bootstrap';
import RightBar from './layout/RightBar.js';
import anime from 'animejs/lib/anime.es.js';
import background from "./assets/img/bg/bg-img2.jpg"
function App() {
  const defaultDark = true;


  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  AOS.init();
  return (
    
    <div className="App bg-body-tertiary" data-bs-theme={theme}>
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>}/>
            <Route path="/home" element={<Home theme={theme} setTheme={setTheme}/>}/>
          </Routes>
        </BrowserRouter>
      <RightBar theme={theme} setTheme={setTheme}/>

      <Footer/>
    </div>
  );
}

export default App;
