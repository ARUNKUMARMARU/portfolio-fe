import React, { useState } from 'react'
import "./Contact.css"
import { Input } from 'antd';
import {HomeFilled, PhoneFilled, GithubFilled, MailOutlined, LinkedinFilled} from '@ant-design/icons';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState("");

  const handleName = (e)=>{
    setName(e.target.value)
    
  };

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  };

  const handleSubject = (e)=>{
    setSubject(e.target.value)
  };

  const handleMessage = (e)=>{
    setMessage(e.target.value)
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const details = {
      name,
      email,
      subject,
      message
    }
      const res = await axios.post('http://localhost:3005/contact', details)
     setName("");
     setEmail("");
     setSubject("");
     setMessage("");
  };
  return (
    <div>
         <div className='image-container2'>
        <img src="https://img.freepik.com/free-vector/creative-geometric-design-space_53876-89781.jpg?size=626&ext=jpg&ga=GA1.1.284963970.1710327628&semt=ais" alt="background image" />
       
       <div className='img-text2'>

       <div>
       <h1>Contact</h1>
       <p>Let's have a chat</p>
       </div> 
 
       </div>
      
       
    </div>

    <form action="" onSubmit={handleSubmit}>
    <div className='contact'>
    <div style={{paddingTop:'50px',display: 'flex', justifyContent:'center'}}>  

     <div >
     <label htmlFor="name">Your Name</label>  <br />     
       <Input  style={{backgroundColor:'grey', width:'55vh',height:'7vh', color:'white', fontSize:'20px'}} 
       value={name} onChange={handleName}/>    
   
     </div>         
          </div>


          <div style={{paddingTop:'30px',display: 'flex', justifyContent:'center'}}>  

<div >
<label htmlFor="name">Email</label>  <br />     
<Input  style={{backgroundColor:'grey', width:'55vh',height:'7vh', color:'white', fontSize:'20px'}}
 value={email} onChange={handleEmail}/>    
</div>    
     </div>

     
     <div style={{paddingTop:'30px',display: 'flex', justifyContent:'center'}}>  

<div >
<label htmlFor="name">Subject</label>  <br />     
<Input  style={{backgroundColor:'grey', width:'55vh',height:'7vh', color:'white', fontSize:'20px'}} 
 value={subject} onChange={handleSubject}/>    

</div>    
     </div>

     <div style={{paddingTop:'30px',display: 'flex', justifyContent:'center'}}>  

<div >
<label htmlFor="name">Message</label>  <br />     
<textarea name="" id="" cols="40" rows="4"
style={{backgroundColor:'grey',color:'white', borderRadius:'10px',fontSize:'20px'}} 
placeholder='type your message here'
value={message} onChange={handleMessage}></textarea>

</div>  
     </div>

     <div style={{paddingTop:'30px',display: 'flex', justifyContent:'center'}}>  

<div >

<button className='button' type='submit'>Submit</button> 

</div>    
     </div>



    </div>
    </form>
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

 <div style={{position:'absolute', top:'1100px', left:'600px'}}>
 <PhoneFilled />
<p> +91 7397658644</p>
 </div>
 <div style={{position:'absolute', top:'1210px', left:'600px'}}>
 <MailOutlined />
<p> arunsmart1020@gmail.com</p>
 </div>

 <div style={{position:'absolute', top:'1100px', left:'1000px'}}>
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

export default Contact