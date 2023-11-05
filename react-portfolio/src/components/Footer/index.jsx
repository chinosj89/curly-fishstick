import React from "react";
import { FaLinkedinIn, FaGithub, FaReddit } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="location">
                            <h4 className="text-uppercase text-center mb-3">Location</h4>
                            <p className="lead">
                                San Diego, CA 91910
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="socials">
                            <h4 className="text-uppercase text-center mb-3">Socials</h4>
                            <a className="btn btn-primary btn-lg btn-floating mx-2" href="https://www.linkedin.com/in/raphael-san-juan-125533179">
                                <FaLinkedinIn />
                            </a>
                            <a className="btn btn-primary btn-lg btn-floating mx-2" href="https://github.com/chinosj89">
                                <FaGithub />
                            </a>
                            <a className="btn btn-primary btn-lg btn-floating mx-2" href="https://www.reddit.com/user/Organization_Weird/">
                                <FaReddit />
                            </a>

                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="contact-info">
                            <h4 className="text-uppercase text-center mb-3">Contact Info</h4>
                            <p className="lead mb-0">
                                Phone number: 619-565-8954
                                <br />
                                Email: raphael.sanjuan13@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <p>Made with React and Vite</p>
            </div>
        </footer>
    );
}

export default Footer;
