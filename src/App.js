import './App.css';
import Home from './pages/Home.js'
import Header from './layout/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage'
import Footer from './layout/Footer.js';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {useEffect} from "react";

import { Fade, Row } from 'react-bootstrap';
import RightBar from './layout/LeftBar.js';
import anime from 'animejs/lib/anime.es.js';
import background from "./assets/img/bg/bg-img2.jpg"
function App() {
  const defaultDark = true;


  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `DN - Home`;
  });


  return (
    
    <div className="App bg-body-tertiary full-width" data-bs-theme={theme}>
      <Header/>
      <Container className='p-5 position-relative bg-body-tertiary'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
      <RightBar theme={theme} setTheme={setTheme}/>

      <Footer/>
    </div>
  );
}

export default App;
