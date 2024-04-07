import React from 'react'
import './About.css'
import my from './my2.jpg'
import { useState, useEffect } from 'react'
import { Circle } from 'rc-progress';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(props) {
  AOS.init({ duration: 1000 });
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  useEffect(() => {
    const incrementCount = () => {
      if (count < 90) {
        setcount(count + 1);
      } else if (count1 < 75) {
        setcount1(count1 + 1)
      } else if (count2 < 80) {
        setcount2(count2 + 1)
      }
    }
    const interval = setInterval(incrementCount, 20);
    return () => clearInterval(interval);
  }, [count, count1, count2]);
  return (
    <>
      <h4 style={{ color: props.mode ? 'white' : '' }}>About Myself</h4>
      <div className=' about-container'>
        <div className="my-info">
          <div className="about" style={{ backgroundColor: props.mode ? '#282828' : '' }}>
            <img style={{ border: props.mode ? '6px solid #895575' : '' }} src={my} alt="" />
            <p style={{ color: props.mode ? 'white' : '' }}>Hello! I am Saqib Tahir & i'm a passionate React.js developer eager to create amazing web experiences. I specialize in front-end development with a strong proficiency in React.js, HTML, CSS, and JavaScript.I also developed many projects in React.js for my learning & experience.I'm constantly learning and staying up-to-date with the latest technologies and best practices in web development</p>
          </div>
          <div className="progress" style={{ backgroundColor: props.mode ? '#282828' : '' }}>

            <div className="child">
              <Circle className='circle' percent={count} strokeWidth={10} strokeColor={props.strok} trailWidth={10} />
              <span style={{ color: props.mode ? 'white' : '' }}> {count}% &nbsp;HTML&CSS</span>
            </div>
            <div className="child">
              <Circle className='circle' percent={count1} strokeWidth={10} strokeColor={props.strok} trailWidth={10} />
              <span style={{ color: props.mode ? 'white' : '' }}>{count1}%&nbsp;JAVASCRIPT</span>
            </div>
            <div className="child">
              <Circle className='circle' percent={count2} strokeWidth={10} strokeColor={props.strok} trailWidth={10} />
              <span style={{ color: props.mode ? 'white' : '' }}>{count2}% &nbsp;REACT.JS</span>
            </div>

          </div>
        </div>
      </div>
      <div className="second-data"  style={{ backgroundColor: props.mode ? '#282828' : '' }}>
        <div className="exp"  data-aos="fade-up">
          <h1 style={{ color: props.mode ? 'white' : '',backgroundColor: props.mode ? '#895575' : '' }}>Self-Experience</h1>
          <p style={{ color: props.mode ? 'white' : '' }}> &rArr; In my journey as a beginner, I have not yet worked in a
            formal company setting, I've been passionately
            developing my skills as a front-end web developer,
            Proficient in React, JavaScript, HTML, and CSS. I've
            independently created various web projects, focusing on
            crafting engaging user interfaces and interactive
            experiences. <br />
            &rArr; My journey into web development began with a
            fascination for building user-friendly experiences. I have
            honed my skills in React, harnessing its power to craft
            responsive and engaging web applications <br />
            &rArr; As a recent entrant to the field, I bring fresh perspectives
            and a hunger for new challenges. I thrive in collaborative
            environments and am dedicated to continuous
            improvement. I embrace opportunities to work with
            experienced professionals and immerse myself in the
            evolving world of web development.</p>
        </div>
        <div className="education" data-aos="fade-up">
          <h1 style={{ color: props.mode ? 'white' : '',backgroundColor: props.mode ? '#895575' : '' }}>EDUCATION</h1>
          <span>BS Computer Science</span>
          <p>GCUF Sahiwal Campus, Sahiwal <br />
            2020-present
          </p>
          <h1 style={{ color: props.mode ? 'white' : '',backgroundColor: props.mode ? '#895575' : '' }}>FSC pre engineering</h1>
          <p>Superior College Sahiwal <br />
            2017-2019</p>
          <h1 style={{ color: props.mode ? 'white' : '',backgroundColor: props.mode ? '#895575' : '' }}>Metric</h1>
          <p>Govt. High School Sahiwal <br />
            2015-2017</p>
        </div>
      </div>

    </>
  )
}
