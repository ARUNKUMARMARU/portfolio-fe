import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Projects.css";
import { Card } from 'antd';
const { Meta } = Card;


function CardComponent() {
  return (  
    
        <div className="card" style={{ width: '30rem'}}>
      <img src="https://st.depositphotos.com/9999814/52407/i/450/depositphotos_524071248-stock-photo-smart-warehouse-management-system-with.jpg" className="card-img-top" alt="..." />
      <div className="card-body" style={{backgroundColor:"rgba(0, 0, 0, 0.750)", color:'white'}}>
        <h5 className="card-title"><b><u>Inventory Management Tool</u></b></h5>
        <p className="card-text">The Inventory Management Tool is a comprehensive web application designed to streamline and automate the process of managing inventory for businesses. It provides a centralized platform for stock management, billing, maintaining customer datails, maintaining staff attendance, reporting, helping businesses efficiently monitor and control their inventory levels.</p>
      </div>
      <ul className="list-group list-group-flush" >
        <li className="list-group-item" style={{backgroundColor:"rgba(0, 0, 0, 0.750)", color:'white'}}><span><span><b>Front End :</b> </span> React</span> <br />
        <span><span><b>Back End :</b> </span> Node JS</span> <br />
        <span><span><b>Database :</b> </span> Mongo DB</span>
        </li>
        <li className="list-group-item" style={{backgroundColor:"rgba(0, 0, 0, 0.750)", color:'white'}}><span><b>Technoligies : </b></span> CRUD Operations, Authentication, All API methods.</li>
        
      </ul>
      <div className="card-body" style={{backgroundColor:"rgba(0, 0, 0, 0.750)", width:'68.8vh', paddingTop:'30px' }} >
       <span  > <a href="https://github.com/ARUNKUMARMARU/Inventory-management-tool-frontend"
       target="_blank" className="anchor">Front-End</a>
    </span>

    <span style={{paddingLeft:'20px'}} > <a href="https://github.com/ARUNKUMARMARU/Inventory-management-tool-backend"
    target='_blank'
   className="anchor">Back-End</a>
    </span>
    <span style={{paddingLeft:'40px'}}><a href="https://inventory-management-tool-1.netlify.app/"
    target='_blank' className="anchor2">View</a></span>   
       
      </div>
    </div>
   
  
  );
};

function CardComponent2() {
  return (  
    
    <div className="card" style={{ width: '30rem'}}>

    <img src="https://media.istockphoto.com/id/1439780079/photo/selective-focus-shot-of-complete-milk-bottling-line-in-a-factory.jpg?s=612x612&w=0&k=20&c=F129FQtsul45xTrr2tnCPtyPFwNUJ42FafYCRnoEHfk=" className="card-img-top" alt="..." />

    <div className="card-body" style={{backgroundColor:"rgba(0, 0, 0, 0.750)", color:'white'}}>

      <h5 className="card-title"><b><u>Dairy Dash</u></b></h5>
      <p className="card-text">The Dairy Dash is a comprehensive web-based application designed to streamline the process of managing fresh milk supply from farms to consumers. Customers can order a milk supply based on theier requirements and admin can manage the order details</p>
    </div>

    <ul className="list-group list-group-flush" >

      <li className="list-group-item" style={{backgroundColor:"rgba(0, 0, 0, 0.750)", color:'white'}}><span><span><b>Front End :</b> </span> React</span> <br />
      <span><span><b>Back End :</b> </span> Node JS</span> <br />
      <span><span><b>Database :</b> </span> Mongo DB</span>
      </li>
      
      <li className="list-group-item" style={{backgroundColor:"rgba(0, 0, 0, 0.750)", color:'white'}}><span><b>Technoligies : </b></span>Authentication, Authorization, Sockets (Implemented as chat), Third party application integration (Stripe), CRUD Operations, Authentication, All API methods.</li>
      
    </ul>
    <div className="card-body" style={{backgroundColor:"rgba(0, 0, 0, 0.750)", width:'68.8vh', paddingTop:'30px' }} >
       <span  > <a href="https://github.com/ARUNKUMARMARU/DAIRY-DASH-FE"
       target="_blank" className="anchor">Front-End</a>
    </span>

    <span style={{paddingLeft:'20px'}} > <a href="https://github.com/ARUNKUMARMARU/DAIRY-DASH-Back-End"
    target='_blank'
   className="anchor">Back-End</a>
    </span>
    <span style={{paddingLeft:'40px'}}><a href="https://dairy-dash-ak.netlify.app/"
    target='_blank' className="anchor2">View</a></span>   
       
      </div>
  </div>
   
  
  );
}

function Projects() {
  return (

    <div>

<div className='image-container2'>
        <img src="https://img.freepik.com/free-vector/creative-geometric-design-space_53876-89781.jpg?size=626&ext=jpg&ga=GA1.1.284963970.1710327628&semt=ais" alt="background image" />
       
       <div className='img-text2'>

       <div>
       <h1><b>Projects</b></h1>
       <p>Some of my most recent works</p>
       </div>      
 
       </div>
       
    </div>

         <div className='projects'>
         <h2 style={{color:'white', textAlign:'center', paddingTop:'30px'}}><b>Capstone Projects</b></h2>
     <div className='projects2'>
     
      <div className='card-container'>
      <CardComponent /> 
      <CardComponent2/>
      </div>
     </div>
    <div style={{width:'200vh'}}>
    <h2 style={{color:'white', textAlign:'center',  paddingTop:'150px', }}><b> Mini Projects</b></h2>
    
    <div style={{display:'flex', justifyContent:"space-between", paddingTop:'70px', paddingLeft:'110px'}}>

    <Card   
    style={{      
      width: 250,
      height:'355px',
      backgroundColor:'grey'
    }}
    cover={<img alt="example" src="https://www.predecessorgame.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Frm5ymc69vmwz%2FPKD9am7t1gWDux5ferLpu%2F6cea48c1a37f326cc22d4c9313e9de21%2Fpublic-api-3.png%3F%26w%3D1200&w=1200&q=100" />}

  >
    
    <Meta
  title={<span style={{ color: 'white'  }}><b><u>Public Api</u></b></span>}
  description={<span style={{ color: 'white' }}>Utilized a public API to fetch data and integrate it into a web application. </span>}
/> <hr />

     <div style={{ display: 'flex', justifyContent: 'space-between'}}>

    <a href="https://github.com/ARUNKUMARMARU/public-api.git" target='_blank' style={{ backgroundColor: 'green', textDecoration: 'none', padding: '15px', borderRadius: '25px', color: 'white', transition: 'background-color 0.3s ease',  }} ><b>Code</b></a>

    <a href="https://public-api-random-dog-image.netlify.app/" target='_blank' style={{ backgroundColor: 'yellowgreen', textDecoration: 'none', padding: '15px', borderRadius: '25px', color: 'black' }}
    ><b>View</b></a>

  </div>
  </Card>

  <Card   
    style={{      
      width: 250,
      height:'372px',
      backgroundColor:'grey'
    }}
    cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQn5EIRKYlIp2zq_o-jSxzy2ZQ7BYTpbTnQ&s" />}

  >
    
    <Meta
  title={<span style={{ color: 'white'  }}><b><u>Shop Homepage (Static UI)</u></b></span>}
  description={<span style={{ color: 'white' }}>The Shop Home Page serves as the entry point for customers to explore and shop for products offered by the online store. </span>}
/> <hr />

     <div style={{ display: 'flex', justifyContent: 'space-between',
     gap: "10px"}}>

    <a href="https://github.com/ARUNKUMARMARU/Home-Deco.git" target='_blank' style={{ backgroundColor: 'green', textDecoration: 'none', padding: '15px', borderRadius: '20px', color: 'white' }}><b>Code</b></a>

   
   <a href="https://home-decorations-ui.netlify.app/" target='_blank' style={{ backgroundColor: 'yellowgreen', textDecoration: 'none', padding: '15px', borderRadius: '25px', color: 'black', }}><b>View</b></a>
  

  </div>
  </Card>

  <Card   
    style={{      
      width: 270,
      height:'453px',
      backgroundColor:'grey'
    }}
    cover={<img alt="example" src="https://www.shutterstock.com/shutterstock/photos/2206784727/display_1500/stock-photo-young-professor-helping-female-student-in-high-school-classroom-friendly-teacher-with-beard-2206784727.jpg" />}

  >
    
    <Meta
  title={<span style={{ color: 'white'  }}><b><u>Student Mentor Assigning</u></b></span>}
  description={<span style={{ color: 'white' }}>The Student Mentor Assigning System is a web-based platform designed to facilitate the seamless matching of students with appropriate mentors. </span>}
/> <hr />

     <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft:'38PX'}}>

    <a href="https://github.com/ARUNKUMARMARU/student-mentor-assigning" target='_blank' style={{ backgroundColor: 'green', textDecoration: 'none', padding: '15px', borderRadius: '25px', color: 'white', transition: 'background-color 0.3s ease',  }} ><b>Back End Code</b></a>

  </div>
  </Card>

  <Card   
    style={{      
      width: 280,
      height:'435px',
      backgroundColor:'grey'
    }}
    cover={<img alt="Hall booking" src="https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-d-render-of-conference-room-prior-to-director-s-business-meeting-image_3855343.jpg" />}

  >
    
    <Meta
  title={<span style={{ color: 'white'  }}><b><u>Online Hall Booking System </u></b></span>}
  description={<span style={{ color: 'white' }}>The Online Hall Booking System is a web-based application designed to provides a convenient platform for users to search, view details, and book available halls based on their requirements. </span>}
/> <hr />

<div style={{ display: 'flex', justifyContent: 'space-between',paddingLeft:'50PX'}}>

<a href="https://github.com/ARUNKUMARMARU/hall-booking/tree/master" target='_blank' style={{ backgroundColor: 'green', textDecoration: 'none', padding: '15px', borderRadius: '25px', color: 'white', transition: 'background-color 0.3s ease',  }} ><b>Back End Code</b></a>

</div>
  </Card>
    </div>
    </div>
    </div>
    </div>    
   
  );
}

export default Projects;
