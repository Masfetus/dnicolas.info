import './App.css';
import Home from './pages/Home.js'
import Header from './layout/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage'
import Footer from './layout/Footer.js';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  const defaultDark = true;


  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );


  return (
    <div className="App bg-body-tertiary full-height" data-bs-theme={theme}>
      <Header theme={theme} setTheme={setTheme}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
