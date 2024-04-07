import React from 'react'
import './Contact.css'
import my from './my2.jpg'
import insta from './insta.png'
import linkdin from './linkedin.png'
import facebook from './fb.png'
import git from './github.png'
import contact from './contact.png'
import mainpng from './another.png'
import email from './email.png'
import location from './address.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact(props) {
  AOS.init({ duration: 1000 });
  return (
    <>
      <div className="head">
        <img src={my} alt="" style={{ border:props.mode ? '3px solid white' : '' }} />
        <h1 style={{ color:props.mode ? 'white' : '' }}>Feel Free to Contact Me</h1>
      </div>
      <div className='contact-container'>
        <div className="contact-data " style={{ backgroundImage:props.mode ? 'linear-gradient(to right, #895575, #282828 )' : '' }}>
          <div className="image">
            <img src={mainpng} alt="" />
          </div>
          <div className="theory" >
            <div className="childs" data-aos="fade-right">
              <img src={contact} alt="" />
              <span style={{ color:props.mode ? 'white' : '' }} >+92 3197175196</span>
            </div>
            <div className="childs" data-aos="fade-left">
              <img src={location} alt="" />
              <span style={{ color:props.mode ? 'white' : '' }} >Punjab, Sahiwal</span>
            </div>
            <div className="childs" data-aos="fade-right">
              <img src={email} alt="" />
              <span style={{ color:props.mode ? 'white' : '' }}
              >saqibtahir196@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="links">
          <a href="https://www.facebook.com/saqib.ch.7106?mibextid=9R9pXO"><img src={facebook} alt="" /></a>
          <a href="https://instagram.com/saqib_ch7?igshid=NzZlODBkYWE4Ng=="><img src={insta} alt="" /></a>
          <a href="https://www.linkedin.com/in/saqib-tahir-858684292"><img src={linkdin} alt="" /></a>
          <a href="https://github.com/SaqibTahir"><img src={git} alt="" /></a>
        </div>

      </div>
    </>
  )
}
