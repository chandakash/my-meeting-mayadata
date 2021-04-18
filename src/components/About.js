import React from 'react'

const About = () => {
    return (
        <div className="container">
            <h1 className="title">About Me</h1>
            <div className="content about-content">
                <div className="list">
                    <span><b>Name: </b>Akash Chand</span><br/>
                    <span><b>Roll: </b>1805096</span><br/>
                    <span><b>Github profile: </b><a href="https://github.com/chandakash" target="_blank">https://github.com/chandakash</a></span><br/>
                    <span><b>Skills: </b>C,C++,Java,JS,React,CSS,HTML,Mysql</span><br/>
                </div>
                <br/>
                <p>Projects:</p>
                <br/>
                <ol style={{paddingLeft:'20px'}}>
                    <li>Bill Management App</li>
                    <li>My Portfolio</li>
                    <li>To-Do List App</li>
                </ol>
            </div>
        </div>
    )
}

export default About
