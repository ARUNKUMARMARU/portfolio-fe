import React, { useState } from 'react';
import {Layout, Menu, theme } from 'antd';
import './Navbar.css';
const { Header, Content, Footer } = Layout;
import axios from 'axios';


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

const items = [
  { label: 'Home', href: '/' },
  {  label: 'About', href: 'about' },
  {  label: 'Skills', href: 'skills' },
  {  label: 'Projects', href: 'projects' },
  {  label: 'Experience', href: 'experience' },
  {  label: 'Contact', href: 'contact' }
];


function Navbar(){ 


  return (
    <div>

    <div className='layout'>
    <Layout>
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div />
      <Menu
      theme="dark"
      mode="horizontal"
                 
      style={{
        flex: 1,            
        minWidth: 0,

      }}>

        {
          items.map((item,i)=>{
           return <Menu.Item key={i+1}
           >
            <a href={item.href} key={i+1}
            className='menu-item' >{item.label}</a>
            </Menu.Item>
          })
        }
        
      </Menu>
      <p
      style={{color:'white', 
      fontFamily:"Times New Roman",
      fontSize:"150%"}}>ARUNKUMAR M</p>
    </Header>
    </Layout>
    </div> 
    
    </div> 
    
  );
};
export default Navbar;
