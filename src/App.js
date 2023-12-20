import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Navbar from './components/Navbar';
import Posts from './components/blog/Posts';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
  <Route path='/' element={<Home />} />
  <Route path='about' element={<About />} />
  <Route path='skills' element={<Skills />} />
  <Route path='work' element={<Works/>} />
  <Route path = 'posts' element={<Posts/>}/>

</Routes>

      </div>
    </Router>
  );
}

export default App;
