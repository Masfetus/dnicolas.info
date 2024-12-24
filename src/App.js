import './App.css';
import Home from './pages/Home.js'
import Header from './layout/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';
import useLocalStorage from 'use-local-storage'
import Footer from './layout/Footer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Helmet, HelmetProvider } from "react-helmet-async";


import RightBar from './layout/RightBar.js';
import PageNotFound from './pages/PageNotFound.js';
import AboutMe from './pages/about-me/AboutMe.js';
import ProfessionalTimeline from './pages/about-me/ProfessionalTimeline.js';
import EducationTimeline from './pages/about-me/EducationTimeline.js';
import BrickPage from './pages/activities/BrickPage.js';
import PawnLanguage from './pages/it-corner/PawnLanguage.js';
import PlayYourGames from './pages/it-corner/PlayYourGames.js';
function App() {
  const defaultDark = true;


  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  AOS.init();
  return (

    <div className="App bg-body-tertiary full-width" data-bs-theme={theme}>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>}/>
          <Route path="/home" element={<Home theme={theme} setTheme={setTheme}/>}/>
          {/*--------------------- ABOUT-ME - Section ---------------------*/}
          <Route path="/about-me" element={<AboutMe theme={theme} setTheme={setTheme}/>}/>
          <Route path="/experience" element={<ProfessionalTimeline theme={theme} setTheme={setTheme}/>}/>
          <Route path="/education" element={<EducationTimeline theme={theme} setTheme={setTheme}/>}/>
          {/*--------------------- IT Corner - Section ---------------------*/}  
          <Route path="/it/pawn" element={<PawnLanguage theme={theme} setTheme={setTheme}/>}/>
          <Route path="/it/pyg" element={<PlayYourGames theme={theme} setTheme={setTheme}/>}/>

          {/*--------------------- ACTIVITIES - Section ---------------------*/}
          <Route path="/activities/bricks" element={<BrickPage theme={theme} setTheme={setTheme}/>}/>
          <Route
                  path="*"
                  element={<PageNotFound />}
              />
        </Routes>
      </BrowserRouter>
      <Footer/>


      <RightBar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
