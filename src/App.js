import './App.css';
import Home from './pages/Home.js'
import Header from './layout/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage'
import Footer from './layout/Footer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import RightBar from './layout/RightBar.js';
import PageNotFound from './pages/PageNotFound.js';
import AboutMe from './pages/AboutMe.js';
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
          <Route path="/about-me" element={<AboutMe theme={theme} setTheme={setTheme}/>}/>
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
