import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Services from './components/Services';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState(false);
  const [strok, setstrok] = useState('rgb(90, 90, 243)');  

  // change mode function------------------
  const navtheme = () => {
    if (mode === false) {
      setstrok('#895575')
      document.body.style.backgroundColor = '	rgb(56,56,56)'
    } else {
      setstrok('rgb(90, 90, 243)')
      document.body.style.backgroundColor = ''
    }
    setmode(!mode)
  }
  return (
    <Router>
         <Navbar navtheme={navtheme} mode={mode}  />
      <div>
        <Routes>
          <Route exact path="/About" element={<About mode={mode} strok={strok}/>} />
          <Route exact path="/" element={<Home mode={mode} />} />
          <Route exact path="/Contact" element={<Contact mode={mode} />} />
          <Route exact path="/Services" element={<Services mode={mode} />} />
          <Route exact path="/Projects" element={<Project mode={mode} />} />
        </Routes>

        
      </div>
      <Footer mode={mode}/>
    </Router>
  );
}

export default App;
