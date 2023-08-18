import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Soundbar from "./components/Soundbar"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";


function App() { 
  return (
    
    <div>
    <Soundbar/>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}
export default App;
