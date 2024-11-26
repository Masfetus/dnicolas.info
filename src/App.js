import './App.css';
import Home from './pages/Home.js'
import Header from './layout/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage'
import Footer from './layout/Footer.js';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Container, Fade, Row } from 'react-bootstrap';
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



  return (
    
    <div className="App bg-body-tertiary animate__animated animate__fadeIn animate__fast" data-bs-theme={theme} style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"auto", backgroundPosition:"center"}}>
      <Header/>
      <Container className='p-5 position-relative'>
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
