import React from 'react'
import './Services.css'
import rct from './Reacts.png'
import web from './web.png'
import mern from './mern.png'
import dsgn from './design.png'

export default function Services(props) {
  return (
    <>
    <div className="head1">
    <h1 style={{color:props.mode ? 'white':''}}>MY Services</h1>
    </div>
    <div className='service-main' >
        <div className="obj" style={{borderBottom:props.mode ? '3px solid white':'',backgroundColor: props.mode?'#282828':''}}>
            <div className="obj-data">
            <img src={web} alt="" />
            <h2 style={{color:props.mode ? 'white':''}}>WEb Development</h2>
            </div>
            <p style={{color:props.mode ? 'white':''}}>Delivered responsive and user-friendly web solutions that exceeded client expectations</p>
        </div>
        <div className="obj" style={{borderBottom:props.mode ? '3px solid white':'',backgroundColor: props.mode?'#282828':''}}>
            <div className="obj-data">
            <img src={dsgn} alt="" />
            <h2 style={{color:props.mode ? 'white':''}}> UI/UX Design</h2>
            </div>
            <p style={{color:props.mode ? 'white':''}}>Transforming ideas into visually captivating and user-friendly UI designs that leave a lasting impression</p>
        </div>
        <div className="obj" style={{borderBottom:props.mode ? '3px solid white':'',backgroundColor: props.mode?'#282828':''}}>
            <div className="obj-data">
            <img src={rct} alt="" />
            <h2 style={{color:props.mode ? 'white':''}}> React.js</h2>
            </div>
            <p style={{color:props.mode ? 'white':''}}>Specialize in creating dynamic and responsive web applications using React.js</p>
        </div>
        <div className="obj" style={{borderBottom:props.mode ? '3px solid white':'',backgroundColor: props.mode?'#282828':''}}>
            <div className="obj-data">
            <img src={mern} alt="" />
            <h2 style={{color:props.mode ? 'white':''}}>MERN Stack</h2>
            </div>
            <p style={{color:props.mode ? 'white':''}}>Built a full-stack MERN (MongoDB, Express, React, Node) service for seamless data management</p>
        </div>

    </div>
    </>
  )
}
