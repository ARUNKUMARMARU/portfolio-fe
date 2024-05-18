import React, { useState } from 'react';
import {Layout, Menu, theme } from 'antd';
import './Navbar.css';
const { Header, Content, Footer } = Layout;
import {Link} from 'react-router-dom';


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
            <Link to={item.href} key={i+1}
            className='menu-item' >{item.label}</Link>
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
