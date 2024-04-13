import React from 'react'
import './Project.css'
import news from './nwz.png'
import port from './myport.png'
import text from './text-app.png'
import weather from './wth.png'
import uni from './uni.png'
import alarm from './alram.png'
import calculator from './calculator.png'
import contest from './contest.png'

export default function Project(props) {
  return (
    <div className='project-container'>
        <h1 style={{color:props.mode ? 'white':''}}>My Projects</h1>
        <div className="project-data">
            <div className="prj-child" style={{backgroundColor:props.mode ? '#282828':'' , borderBottom: props.mode ? '5px solid white' : ''}}>
                <img src={news} alt="" />
                <span style={{color:props.mode ? 'white':''}}>News-Land Web Application Using React.js</span>
                <a href="https://github.com/SaqibTahir/Mynewsapp"><button>Go To</button></a>
            </div>
            <div className="prj-child" style={{backgroundColor:props.mode ? '#282828':'' , borderBottom: props.mode ? '5px solid white' : ''}}>
                <img src={text} alt="" />
                <span style={{color:props.mode ? 'white':''}}>TextConverter Web Application Using React.js</span>
                <a href="https://github.com/SaqibTahir/My-Application"><button>Go To</button></a>
            </div>
            <div className="prj-child" style={{backgroundColor:props.mode ? '#282828':'' , borderBottom: props.mode ? '5px solid white' : ''}}>
                <img src={weather} alt="" />
                <span style={{color:props.mode ? 'white':''}}>Weather Web Application Using React.js</span>
                <a href="https://github.com/SaqibTahir/mywaether"><button>Go To</button></a>
            </div>
            <div className="prj-child" style={{backgroundColor:props.mode ? '#282828':'' , borderBottom: props.mode ? '5px solid white' : ''}}>
                <img src={port} alt="" />
                <span style={{color:props.mode ? 'white':''}}>Portfolio Web Application Using React.js</span>
                <a href="https://github.com/SaqibTahir/My-Portfolio"><button>Go To</button></a>
            </div>
            <div className="prj-child" style={{backgroundColor:props.mode ? '#282828':'' , borderBottom: props.mode ? '5px solid white' : ''}}>
                <img src={uni} alt="" />
                <span style={{color:props.mode ? 'white':''}}>ECommerce Design using HTML,CSS & Javascript</span>
                <a href="https://github.com/SaqibTahir/e-commerce"><button>Go To</button></a>
            </div>
            <div className="prj-child" style={{backgroundColor:props.mode ? '#282828':'' , borderBottom: props.mode ? '5px solid white' : ''}}>
                <img src={alarm} alt="" />
                <span style={{color:props.mode ? 'white':''}}>Alarm Clock using HTML,CSS & Javascript</span>
                <a href="https://github.com/SaqibTahir/Alarm-App"><button>Go To</button></a>
            </div>
            <div className="prj-child" style={{backgroundColor:props.mode ? '#282828':'' , borderBottom: props.mode ? '5px solid white' : ''}}>
                <img src={calculator} alt="" />
                <span style={{color:props.mode ? 'white':''}}>Calculator using HTML,CSS & Javascript</span>
                <a href="https://github.com/SaqibTahir/Calculator.app"><button>Go To</button></a>
            </div>
            <div className="prj-child" style={{backgroundColor:props.mode ? '#282828':'' , borderBottom: props.mode ? '5px solid white' : ''}}>
                <img src={contest} alt="" />
                <span style={{color:props.mode ? 'white':''}}>Contest App using HTML,CSS & Javascript</span>
                <a href="https://github.com/SaqibTahir/Fetch.api"><button>Go To</button></a>
            </div>

        </div>
    </div>
  )
}
