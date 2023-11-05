import React from "react";
import Project from "../components/Project/Project"
import moviePicture from "../assets/2ndProject.png"
import bookPicture from "../assets/BookReview.png"
import techPicture from "../assets/techBlog.png"
function ProjectPage() {
    return (
        <>
            <div className="page-section portfolio" id="portfolio">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5">My Portfolio</h2>

                <div className="row justify-content-center">
                    <Project
                        id="1"
                        name="Movie Finder Application"
                        description="My team and I created a Movie Finder app based on the user's preference and input. We used an API called: Movie of the Night API. We also implemented Bootstrap for our CSS"
                        github="https://github.com/matthkang/Movie-Finder"
                        deployedSite="https://matthkang.github.io/Movie-Finder/index.html"
                        image={moviePicture}
                    />

                    <Project
                        id="2"
                        name="Book Review App"
                        description="Created a Book Review APP using the MVC format and an API to find books and create reviews for them"
                        github="https://github.com/MikeWentForth/Book-Review"
                        deployedSite="/"
                        image={bookPicture}
                    />

                    <Project
                        id="3"
                        name="Tech Blog"
                        description="Create a tech blog using the MVC format and handelbars.js"
                        github="https://github.com/chinosj89/expert-guacamole#module-14-model-view-controller-challenge---tech-blog"
                        deployedSite="https://lit-castle-15830-1deec82cb2c6.herokuapp.com/"
                        image={techPicture}
                    />
                    {/*
                    <Project
                        id="1"
                        name=""
                        description=""
                        github=""
                        deployedSite=""
                        image={ }
                    />
                    <Project
                        id="1"
                        name=""
                        description=""
                        github=""
                        deployedSite=""
                        image={ }
                    />
                    <Project
                        id="1"
                        name=""
                        description=""
                        github=""
                        deployedSite=""
                        image={ }
    /> */}


                </div>
            </div>
        </>
    )
}
export default ProjectPage;