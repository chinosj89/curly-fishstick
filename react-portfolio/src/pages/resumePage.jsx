import React from "react";
import background from "../assets/resume.png"
function ResumePage() {
    return (
        <>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", height: 1000 }} className="" >
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-white p-5">My Current Resume</h2>

                    <div className="row m-5">
                        <div className="col-lg-3 ms-auto m-5">
                            <p className="lead">Front-End Tech</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Bootstrap</li>
                                <li>Jquery</li>
                                <li>Responsive design</li>
                                <li>Handlebars</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ms-auto m-5">
                            <p className="lead">Back-End Tech</p>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MySQL/Sequelize</li>
                                <li>MongoDB/Mongoose</li>
                                <li>Progressive Web App (PWA)</li>
                                <li>Object-Relational Mapping (ORM)</li>
                                <li>Model-View Controller (MVC)</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ms-auto m-5">
                            <p className="lead">Technology</p>
                            <ul>
                                <li>Heroku</li>
                                <li>Postman/Insomnia</li>
                                <li>Rest Api</li>
                                <li>GraphQL Api</li>
                                <li>Github</li>
                                <li>Apollo Server</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <a className="btn btn-xl btn-outline-dark" href="">
                            <i className="fas fa-download"></i>
                            Download My Resume!
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResumePage;