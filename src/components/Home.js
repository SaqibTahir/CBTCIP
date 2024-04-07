import React from 'react'
import './Home.css'
import logo from './mypic.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home(props) {
    AOS.init({ duration: 1000 });
    return (
        <div className='home-container'>
            <div className="main ">
                <div className="data">
                    <span   style={{color:props.mode ? 'white':''}}>Hello it's Me</span>
                    <h1  style={{color:props.mode ? 'white':''}}  data-aos="fade-right">SAQIB TAHIR</h1>
                    <h3 style={{color:props.mode ? 'white':''}} data-aos="fade-left">& I'am a Web Developer </h3>
                    <p style={{color:props.mode ? 'white':''}} data-aos="fade-left">  Building Responsive and user-friendly interfaces that captivate and engage users</p>
                    <div className="btn">
                        <Link to='/Contact'><button className='button1 same' style={{border:props.mode ? '2px solid white':'' , color:props.mode ? ' white':'', backgroundColor:props.mode ? '#282828':'' }}>Connect with me</button></Link>
                        <a href='https://www.linkedin.com/in/saqib-tahir-858684292'><button className='button2 same' style={{border:props.mode ? '2px solid #895575':'', backgroundColor:props.mode ? '#895575':'' }}>LinkdIn Profile</button></a>
                    </div>

                </div>
                <div className="home-img">
                    <img  className='shake'  style={{border:props.mode? '6px solid white':''}} src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}
