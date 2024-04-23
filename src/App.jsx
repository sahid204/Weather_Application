import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route as Route6 } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route6 path="/Home" element={<Home />} />
          <Route6 path="/About" element={<About />} />
          <Route6 path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
     
        
    </>
  )
}

export default App
