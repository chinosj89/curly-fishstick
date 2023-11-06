/* eslint-disable react/prop-types */
import React from "react";
import './index.css'
function Project(props) {
    return (
        <>
            <section className="white" >
                <div className="container">

                    <article className="postcard dark blue align-items-center justify-content-center h-100 w-100">
                        <img className="postcard__img p-3" src={`${props.image}`} alt={`${props.title}`} />
                        <div className="postcard__text">
                            <h1 className="postcard__title"><a href="#">{props.name}</a></h1>
                            <div className="postcard__subtitle small">
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{props.description}</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item play blue">
                                    <a href={`${props.github}`}><i className="fas fa-play mr-2"></i> Github Repository</a>
                                </li>
                                <li className="tag__item play blue">
                                    <a href={`${props.deployedSite}`}><i className="fas fa-play mr-2"></i> Deployed Site</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
export default Project;