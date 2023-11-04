import React from "react";
import { FaLinkedinIn, FaGithub, FaReddit } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="container d-flex justify-content-center py-1">

                    <div className="col-lg-3">
                        <div className="location">
                            <h4 className="text-uppercase mb-3">Location</h4>
                            <p className="lead">
                                San Diego, CA 91910
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="socials">
                            <h4 className="text-uppercase mb-3">Socials</h4>
                            <a className="btn btn-primary btn-lg btn-floating mx-2" href="https://www.linkedin.com/in/raphael-san-juan-125533179">
                                <FaLinkedinIn />
                            </a>
                            <a className="btn btn-primary btn-lg btn-floating mx-2" href="https://github.com/chinosj89">
                                <FaGithub />
                            </a>
                            <a className="btn btn-primary btn-lg btn-floating mx-2" href="YOUR_REDDIT_URL">
                                <FaReddit />
                            </a>

                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="contact-info">
                            <h4 className="text-uppercase mb-3">Contact Info</h4>
                            <p className="lead mb-0">
                                Phone number: 619-565-8954
                                <br />
                                Email: raphael.sanjuan13@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <p>Made with React</p>
            </div>
        </footer>
    );
}

export default Footer;
