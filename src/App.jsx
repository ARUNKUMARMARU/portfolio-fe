import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';


function App() {
  return (
   
      <Router>

       
         <Navbar/>
          
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
       
        

       

      </Router>
  )  
}

export default App