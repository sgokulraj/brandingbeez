import logo from './images/courselogo.png'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import './Home.css'
import course from './images/fullstack.png'
import Highlights from './Highlights.js'
import Reviews from './Review'


function Home() {
    
    return (
        <>
            <div className="navContainer">
                <nav>
                    <h2 style={{ letterSpacing: '5px', cursor: "pointer" }}>ENHANCE</h2>
                    <ul>
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="#highlights" className="link" >Highlights</Link></li>
                        <li><Link to="#curriculum" className="link" >Curriculum</Link></li>
                        <li><Link to="#contact" className="link">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="main">
                <div className="header">
                    <div>
                        <h1 style={{lineHeight:'50px'}} className="title">Comprehensive Course on <span style={{color:"royalblue"}}>FULL STACK WEB DEVELOPEMENT</span></h1>
                        {/* <h1 style={{ fontSize: "50px", marginTop: "20px" }} className="name">Hey, I'm <span>Gokulraj</span></h1> */}
                        <p style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px", lineHeight: "40px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <div className="followIcons">
                            <button className="enroll">Enroll Now</button>

                        </div>
                    </div>
                    <div>
                        <img src={course} className='course'/>
                    </div>

                </div>
            </div>
           <Highlights/>

        </>
    )

}

export default Home