import React from 'react'
import './Footer.css'
import my from './my2.jpg'

export default function Footer(props) {
  return (
    <footer style={{backgroundColor:props.mode ? '#282828':''}}>
    <div className='footer-container'>
        <div className="footer-data">
      <img src={my} alt="" />
      <span style={{ color:props.mode ? 'white' : '' }}>SAQIB TAHIR</span>
      </div>
      <ul>
        <li style={{ color:props.mode ? 'white' : '' }}>About</li>
        <li style={{ color:props.mode ? 'white' : '' }}>Content Guide</li>
        <li style={{ color:props.mode ? 'white' : '' }}>Privacy</li>
        <li style={{ color:props.mode ? 'white' : '' }}>Term of Use</li>
      </ul>
    </div>
    <hr style={{ backgroundColor:props.mode ? 'white' : '' }} />
    <p style={{ color:props.mode ? 'white' : '' }}>Copyright © 2023 ST-Developer</p>
    </footer>
  )
}
