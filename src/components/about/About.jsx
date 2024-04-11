import React from 'react'
import './About.css';
import {HomeFilled, PhoneFilled, GithubFilled, MailOutlined, LinkedinFilled} from '@ant-design/icons'


function About() {
  return (
    <div className='about'>
      <p
      style={{fontSize:"2.3rem", fontFamily: 'serif', padding:'30px'}}>About Me</p>

    <div className='paragraph'>
    <p
    style={{fontSize:"1.7rem"}}>Who I'm?
    </p>
    <p style={{fontSize:"1.2rem", fontFamily:"cursive"}}>
    Hello! I'm Arunkumar, a junior web developer passionate about crafting beautiful and functional websites. With a strong foundation in front-end development and a growing expertise in back-end technologies, I am dedicated to delivering high-quality solutions that meet both user needs and business objectives.
    
    </p>
    {/* <p>
    As a fresh graduate with a passion for web development and a recently completed certified course in the MERN stack, I am eager to kickstart my career in the tech industry. With a strong foundation in front-end and back-end development, I bring enthusiasm and a hunger for learning to every project. I thrive in collaborative environments where I can contribute ideas, solve problems, and grow alongside experienced professionals. Committed to staying updated with the latest technologies and best practices, I am excited about the opportunity to leverage my skills and make a meaningful impact as a junior web developer.
    </p> */}
    </div>
    <div className='footer'>
       <footer className='footer2'>
       
   <div>
   <HomeFilled />  
 
 <p>7/175, KeelKadhavuKarai,
 Keregounden Palayam(po),
 Annur, Coimbatore - 641 697 <br />
 Tamil Nadu,
 India</p>
   </div>

 <div style={{position:'absolute', top:'400px', left:'600px'}}>
 <PhoneFilled />
<p> +91 7397658644</p>
 </div>
 <div style={{position:'absolute', top:'500px', left:'600px'}}>
 <MailOutlined />
<p> arunsmart1020@gmail.com</p>
 </div>

 <div style={{position:'absolute', top:'400px', left:'1000px'}}>
 <a href="https://github.com/ARUNKUMARMARU"
 target='_blank'
 className='icon-link'><GithubFilled /></a> &nbsp; &nbsp; &nbsp;
 <a href="https://www.linkedin.com/in/arunkumar-m-cbe/"
 target='_blank' className='icon-link'><LinkedinFilled /></a>

 </div>
   
       </footer>
    </div>

      </div>
  )
}

export default About