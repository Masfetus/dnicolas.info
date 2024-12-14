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

import RightBar from './layout/RightBar.js';
import PageNotFound from './pages/PageNotFound.js';
import AboutMe from './pages/about-me/AboutMe.js';
import ProfessionalTimeline from './pages/about-me/ProfessionalTimeline.js';
import EducationTimeline from './pages/about-me/EducationTimeline.js';
import BrickPage from './pages/activities/BrickPage.js';
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
      <meta name="keywords" content="Dimitri Nicolas Lauterach Personal IT analyst developer engineer" />
      <meta name="description" content="Personal website of Dimitri Nicolas. IT Engineer, analyst, developer, and more to learn. Have a dive into a part of my life." />
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>}/>
          <Route path="/home" element={<Home theme={theme} setTheme={setTheme}/>}/>
          <Route path="/about-me" element={<AboutMe theme={theme} setTheme={setTheme}/>}/>
          <Route path="/experience" element={<ProfessionalTimeline theme={theme} setTheme={setTheme}/>}/>
          <Route path="/education" element={<EducationTimeline theme={theme} setTheme={setTheme}/>}/>
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
