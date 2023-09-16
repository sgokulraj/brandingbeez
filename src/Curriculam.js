import "./Curriculum.css"
import html from "./logos/icons8-html5-144.png";
import css from "./logos/icons8-css3-96.png";
import boostrap from "./logos/bootstrap.jpg";
import javascript from "./logos/icons8-javascript-144.png";
import react from "./logos/react144.png";
import firebase from "./logos/firebase144.png";
import github from "./logos/github.png";
import express from "./logos/icons8-express-js-80.png"
import node from "./logos/icons8-node-js-144.png"
import mongodb from "./logos/icons8-mongodb-144.png"
import Contact from './Contact'


function Curriculum() {

    return (
        <>
            <div id="curriculum">
                <div className="container">
                    <h1 style={{ letterSpacing: '5px', textAlign: 'center' }} className='headings'>Curriculum</h1>
                    <div className="carousel" >
                        <div className="logoContainer">
                            <img src={html} alt="myphoto" className="skill-logo" />
                            <h4>HTML5</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={css} alt="myphoto" className="skill-logo" />
                            <h4>CSS3</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={javascript} alt="myphoto" className="skill-logo" />
                            <h4>JavaScript</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={boostrap} alt="myphoto" className="skill-logo" />
                            <h4>Boostrap</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={react} alt="myphoto" className="skill-logo" />
                            <h4>React</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={node} alt="myphoto" className="skill-logo" />
                            <h4>Node.js</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={express} alt="myphoto" className="skill-logo" />
                            <h4>Express.js</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={mongodb} alt="myphoto" className="skill-logo" />
                            <h4>MongoDB</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={firebase} alt="myphoto" className="skill-logo" />
                            <h4>Firebase</h4>
                        </div>
                        <div className="logoContainer">
                            <img src={github} alt="myphoto" className="skill-logo" />
                            <h4>GitHub</h4>
                        </div>

                    </div>
                </div>
            </div>
            <Contact />

        </>
    )
}


export default Curriculum