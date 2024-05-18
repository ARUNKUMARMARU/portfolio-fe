import React from 'react'
import './Experience.css';
import {HomeFilled, PhoneFilled} from '@ant-design/icons';


function Experience() {
  return (
    <div className='exp'>
         <div className='image-container3'>
        <img src="https://img.freepik.com/free-vector/creative-geometric-design-space_53876-89781.jpg?size=626&ext=jpg&ga=GA1.1.284963970.1710327628&semt=ais" alt="background image" />
       
       <div className='img-text3'>
      
       <h1><b>Professional Experience</b></h1>   
 
       </div>

       <div className='heading2'>
                <h3><u>Non IT Domain</u></h3>
                </div>
                <div >
                   <p className='para'>
                   <strong style={{fontSize:'30px'}}>Position : </strong>Civil Engineer & Customer Relationship Executive  </p><br />

                  <p className='para2'>
                  <strong style={{fontSize:'30px'}}>Company : </strong>Royal Home Makers
                  </p>

                  <p className='para3'>
                  <strong style={{fontSize:'30px'}}>Duration : </strong>February 2020 - September 2023
                  </p>

                  <div >
                  <p className='para4'>
                  <strong style={{fontSize:'25px'}}>Responsibilities and Achievements : </strong></p>
                 <p className='ul'>
                    *  Supervised the construction of over 40 houses, ensuring adherence to quality standards, safety regulations, and project timelines.                    
                 </p>
                 <p className='ul2'>
                 *  Managed construction projects from planning and design stages to execution and completion.

                 </p>
                   <p className='ul3'>
                 *  Collaborated with architects, contractors, and construction workers to coordinate project activities and resolve technical issues.
                   </p>
                 
                  </div>
                  <div className='it'>
                    <h3><u>IT Domain</u></h3>
                    <p className='it2'>
                   <strong style={{fontSize:'28px'}}>Certified Course Name : </strong>Zen Class FullStack Developer Programe  </p>

                   <p className='it3'>
                   <strong style={{fontSize:'30px'}}>Institute : </strong>Guvi (IIT Medras Incubated Institution) </p>
                  </div>
                  
                  
                </div>         
           
       
    </div>
    <div className='footer'>
       <footer className='footer2'>
       
   <div>
   <HomeFilled />  
 
 <p>7/175, KeelKadhavuKarai,
 Keregounden Palayam(po),
 Annur, Coimbatore - 641 697 <br />
 Tamil Nadu,
 India
 </p>
 
   </div>

   <div style={{position:'absolute',
top:'180vh', left:'80vh'}}>
   <PhoneFilled/> <br />+91 7397658644
    </div> 
  
       </footer>
       
    </div>
        
          
        
    </div>
  )
}

export default Experience