import { MdEmail } from "react-icons/md"
import { BiCopyright } from "react-icons/bi"
import './Contact.css'

function Contact() {
    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="column1">
                            <h1 className="subtitle" style={{ letterSpacing: "1px", color: "black" }}>Contact Us</h1>
                            <a href="mailto:igokulraj412@gmail.com" className="email"><MdEmail className="emailIcon" />abc@gmail.com</a>
                            
                           
                        </div>

                        <div className="column2">
                            <form>                          
                            
                                <div>
                                    <br />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                    />
                                    <br />
                                </div>
                                <div>
                                    <br />
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                    />
                                    <br />
                                </div>
                                <div>
                                    <br />
                                    <textarea
                                        rows={6}
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                    />
                                    <br />
                                </div>
                                <div className="btnGroup">
                                    <button type="submit" id="submitBtn" className="cv">
                                        Submit
                                    </button>
                                    <button type="reset" id="clearBtn" className="cv">
                                        Reset
                                    </button>
                                </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p> Copyright <BiCopyright style={{ marginBottom: "-3px" }} /> 2023. Developed by Gokulraj Sivagnanam </p>
            </div>
        </>
    )
}

export default Contact