import React from 'react'
import "./Home.css";


function Home() {
  return (
    <div>  

      
      <div className='image-container'>
          <div className='image-text'>
        <p className='text'>Hi, I am </p>
        <p className='text2'>ARUNKUMAR</p>
        <p className='text3'><b>Full Stack Developer</b></p>
      </div>
     

      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="intro-image" 
      />
       <div className='resume'>
    <a href="https://drive.google.com/file/d/1WPtNHxVDZtHZ56sEnUFbi-SuxfnRJYnt/view?usp=drive_link" download="Resume.pdf" target='_blank'
    style={{textDecoration:'none'}}>Resume</a>
    </div>
      </div>
      </div>
    </div>
  )
}

function About () {
  return(
  <div className='about'>
<p>How i am</p>
<p>
Hello! I'm Arunkumar, a junior web developer passionate about crafting beautiful and functional websites. With a strong foundation in front-end development and a growing expertise in back-end technologies, I am dedicated to delivering high-quality solutions that meet both user needs and business objectives.
</p>
  </div>
  )
}


export default Home









