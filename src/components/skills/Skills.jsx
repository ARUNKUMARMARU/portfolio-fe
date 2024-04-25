import React, { useEffect, useRef } from 'react'
import "./Skills.css";
import {HomeFilled, PhoneFilled, GithubFilled, MailOutlined, LinkedinFilled} from '@ant-design/icons'


function Skills() {

  

  return (
    <div>
        <div className='image-container2'>
        <img src="https://img.freepik.com/free-vector/creative-geometric-design-space_53876-89781.jpg?size=626&ext=jpg&ga=GA1.1.284963970.1710327628&semt=ais" alt="background image" />
       
       <div className='img-text2'>

       <div>
       <h1>Skills</h1>
       <p>Skills I Know</p>
       </div>      
 
       </div>
       
    </div>
  
    
   
    <div className='img-logo1'> 
   <marquee behavior="" loop="" direction="left" scrollamount="12"
   className='img-logo'>
          <div className='image-wrapper'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" alt="HTML" 
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
           <p>HTML</p>
          </div>
           

          <div className='image-wrapper'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433" alt="JAVASCRIPT"
           style={{padding:'32px 16px', margin:'19px',width:'150px'}}/>
         <p>JAVASCRIPT</p>
          </div>
       
          <div className='image-wrapper'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png" alt="CSS"  style={{padding:'32px 16px', margin:'19px',width:'115px'}}
           />
           <p>CSS</p>
          </div>

<div className='image-wrapper'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" alt="REACT" 
            style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>REACT</p>
          </div>

<div className='image-wrapper'>
           <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="BOOTSTRAP"  
            style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>BOOTSTRAP</p>
          </div>

<div className='image-wrapper'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5d9a1dlKN6uIr9yawVly55Q2YJw9w9ck2RQOAIHSk8hNPMBWrpxKHkF1Y0CsPdS9Tvs&usqp=CAU" alt="MONGODB" 
             style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>MONGODB</p>
          </div> 

<div className='image-wrapper'>
           <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="ANT DESIGN"  
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>  
           <p>ANTDESIGN</p>
          </div>

<div className='image-wrapper'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png" alt="NODE JS" 
           style={{padding:'32px 16px', margin:'19px',width:'200px'}}/>  
           <p>NODE JS</p>
          </div>

          <div className='image-wrapper'>
   
           <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="EXPRESS JS" 
           style={{padding:'32px 16px', margin:'19px', width:'200px', paddingTop:'50px',
           backgroundColor:'white', borderRadius:'50px'}}/>  
           <p>EXPRESS JS</p>
          </div>

<div className='image-wrapper'>
           <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GITHUB" 
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>  
           <p>GITHUB</p>
          </div>

          <div className='image-wrapper'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" alt="HTML" 
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
           <p>HTML</p>
          </div>
           

          <div className='image-wrapper'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433" alt="JAVASCRIPT"
           style={{padding:'32px 16px', margin:'19px',width:'150px'}}/>
         <p>JAVASCRIPT</p>
          </div>
       
          <div className='image-wrapper'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png" alt="CSS"  style={{padding:'32px 16px', margin:'19px',width:'115px'}}
           />
           <p>CSS</p>
          </div>

<div className='image-wrapper'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" alt="REACT" 
            style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>REACT</p>
          </div>

<div className='image-wrapper'>
           <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="BOOTSTRAP"  
            style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>BOOTSTRAP</p>
          </div>

<div className='image-wrapper'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5d9a1dlKN6uIr9yawVly55Q2YJw9w9ck2RQOAIHSk8hNPMBWrpxKHkF1Y0CsPdS9Tvs&usqp=CAU" alt="MONGODB" 
             style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>MONGODB</p>
          </div> 

<div className='image-wrapper'>
           <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="ANT DESIGN"  
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>  
           <p>ANTDESIGN</p>
          </div>

<div className='image-wrapper'>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png" alt="NODE JS" 
           style={{padding:'32px 16px', margin:'19px',width:'200px'}}/>  
           <p>NODE JS</p>
          </div>

          <div className='image-wrapper'>
   
           <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="EXPRESS JS" 
           style={{padding:'32px 16px', margin:'19px', width:'200px', paddingTop:'50px',
           backgroundColor:'white', borderRadius:'50px'}}/>  
           <p>EXPRESS JS</p>
          </div>

<div className='image-wrapper'>
           <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GITHUB" 
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>  
           <p>GITHUB</p>
          </div>

          </marquee>

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

 <div style={{position:'absolute', top:'670px', left:'500px'}}>
 <PhoneFilled />
<p> +91 7397658644</p>
 </div>
 <div style={{position:'absolute', top:'780px', left:'500px'}}>
 <MailOutlined />
<p> arunsmart1020@gmail.com</p>
 </div>

 <div style={{position:'absolute', top:'670px', left:'900px'}}>
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

export default Skills