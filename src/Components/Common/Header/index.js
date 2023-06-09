import React from 'react'
import "./style.css";
import Button from '../Button';
import TemporaryDrawer from './drawer';
const Header = () => {
  return (
    <div className="navbar">
      <h1 className='logo'>CyrptoTracking<span style={{color: "var(--blue)"}}>.</span></h1>
      <div className='links'>
        <a href='/'>
          <p className='link'>Home </p>
        </a>
        <a href='/'>
          <p className='link'>Compare </p>
        </a>
        <a href='/'>
          <p className='link'>Watchlist </p>
        </a>
        <a href='#'>
          <p className='link'>
            <Button text={"Dashboard"} onClick={()=>console.log("btn clicked")}/></p>
        </a>
      </div>
      <div className='mobile-drawer'>
        <TemporaryDrawer/>
      </div>
    </div>
  )
}

export default Header