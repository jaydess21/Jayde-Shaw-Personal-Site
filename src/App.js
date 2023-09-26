import Soundbar from "./components/Soundbar"; 
import About from "./components/About";
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
    </div>
  );
}
export default App;
