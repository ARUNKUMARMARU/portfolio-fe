import React, { useState } from 'react';
import {Layout, Menu, theme } from 'antd';
import './Navbar.css';
const { Header, Content, Footer } = Layout;
//const item = ['Home', 'About', "Skills", "Projects","Professional experience", "Contact"]
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
           return <Menu.Item key={i+1}>
            <a href={item.href} key={i+1}>{item.label}</a>
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
