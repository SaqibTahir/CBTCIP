import React from 'react'
import './Navbar.css'
import my from './my.png'
import ham from './ham.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse, faCircleQuestion,
  faSquarePhone,
  faFileCode,
  faRectangleList
} from '@fortawesome/free-solid-svg-icons'


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
          <h1 style={{ color: props.mode ? 'white' : '' }}>ST-Developer</h1>
        </div>
        <div className={`container ${open ? 'openit' : ''}`} >
          <ul>
            <li><Link to="/" style={{ color: props.mode ? 'white' : '' }}> <FontAwesomeIcon icon={faHouse} /> Home</Link></li>
            <li><Link to="/About" style={{ color: props.mode ? 'white' : '' }}> <FontAwesomeIcon icon={faCircleQuestion} /> About Me</Link></li>
            <li><Link to="/Contact" style={{ color: props.mode ? 'white' : '' }}> <FontAwesomeIcon icon={faSquarePhone} /> Contact</Link></li>
            <li><Link to="/Services" style={{ color: props.mode ? 'white' : '' }}> <FontAwesomeIcon icon={faFileCode} /> Services</Link></li>
            <li><Link to="/Projects" style={{ color: props.mode ? 'white' : '' }}> <FontAwesomeIcon icon={faRectangleList} /> Projects</Link></li>
          </ul>
          <div class="check">
            <input id="check" type="checkbox" onClick={props.navtheme} />
            <label for="check"></label>
          </div>
          {/* <img src={props.pic} alt="" onClick={props.navtheme} /> */}
        </div>
      </nav>
      <div className="hamo">
        <img src={ham} alt="" onClick={openmanue} />
      </div>
    </>
  )
}
