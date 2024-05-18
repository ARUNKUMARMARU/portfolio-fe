import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import axios from 'axios';


function App() {
  axios.get('https://inventory-management-tool-backend-shqe.onrender.com/api/getstaff')
  .then(response => {
   
  })
  .catch(error => {
    
  });

  axios.get('https://dairy-dash-back-end-3.onrender.com/api/getprice')
  .then(response => {
   
  })
  .catch(error => {
    
  });
 
  return (
   
      <Router>
<div className="container-fluid">
       
         <Navbar/>
          
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
       
        

        </div>

      </Router>
  )  
}

export default App