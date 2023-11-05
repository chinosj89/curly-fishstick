/* eslint-disable react/prop-types */
import React from "react";

function Project(props) {
    return (
        <>
            <div className="col-md-6 col-lg-3 mb-5">

                <div className="portfolio-item" data-bs-target={`#portfolioModal${props.id}`}>
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={`${props.image}`} alt={`${props.title}`} />
                    <p className="mb-4">
                        <h2>{props.name}</h2>
                        {props.description}<br />
                        <a href={`${props.github}`} className="mb-4">Github Repository</a> <br />
                        <a href={`${props.deployedSite}`} className="mb-4">Deployed Site</a> <br /> <br />
                    </p>
                </div>
            </div>

        </>
    )
}
export default Project;