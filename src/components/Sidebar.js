import React  from 'react'
import {ROLL_NUMBER} from '../utils/constants'
import home from '../assets/home.png'
import avatar from '../assets/avatar.png'
import {Link} from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="bar-container">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <h2 className="roll">{ROLL_NUMBER}</h2>
            </div>
            
            <Link to="/" >
                <div className="home-page " >
                        <img src={home} alt="home" width="13px" height="12px"/>
                        <h5 style={{paddingLeft:'10px', fontWeight:'400'}}>
                            Home
                        </h5>
                </div>
            </Link>
            <Link to="/about" >
                <div className="aboutme-page">
                    <img src={avatar} alt="avatar" width="12px" height="12px"/>
                    <h5 style={{paddingLeft:'10px' , fontWeight:'400'}}>
                        About Me
                    </h5>
                </div>
            </Link>
            
        </div>
    )
}

export default Sidebar
