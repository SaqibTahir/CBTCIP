import React from 'react'
import './Navbar.css'
import my from './my.png'
import ham from './ham.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const [open, setopen] = useState(false);

  // openmanue function ------------------------
  const openmanue = () => {
    setopen(!open)
  }
  return (
    <>
      <nav className={props.mode ? 'changeit' : ''}>
        <div className="title">
          <img src={my} alt="" />
          <h1 style={{color:props.mode ? 'white':''}}>ST-Developer</h1>
        </div>
        <div className={`container ${open ? 'openit' : ''}`} >
          <ul>
            <li><Link to="/" style={{ color:props.mode ? 'white' : '' }}>Home</Link></li>
            <li><Link to="/About" style={{ color:props.mode ? 'white' : '' }}>About Me</Link></li>
            <li><Link to="/Contact" style={{ color: props.mode ? 'white' : '' }}>Contact</Link></li>
            <li><Link to="/Services" style={{ color: props.mode ? 'white' : '' }}>Services</Link></li>
            <li><Link to="/Projects" style={{ color: props.mode ? 'white' : '' }}>Projects</Link></li>
          </ul>
          <img src={props.pic} alt="" onClick={props.navtheme} />
        </div>
      </nav>
      <div className="hamo">
        <img src={ham} alt="" onClick={openmanue} />
      </div>
    </>
  )
}
