import './App.css';
import Home from './pages/Home.js'
import Header from './base/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage'



function App() {
  const defaultDark = true;
  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );


  return (
    <div className="App" data-bs-theme={theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <Home/>
    </div>
  );
}

export default App;
