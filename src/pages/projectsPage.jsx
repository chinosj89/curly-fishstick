import React from "react";
import Project from "../components/Project/Project"
import moviePicture from "../assets/2ndProject.png"
import bookPicture from "../assets/BookReview.png"
import techPicture from "../assets/techBlog.png"
import weatherPicture from "../assets/weatherApp.png"
import notePicture from "../assets/noteTaker.png"
import workDayPicture from "../assets/workdayApp.png"
import background from "../assets/resume.png"
function ProjectPage() {
    return (
        <>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }} className="page-section portfolio " id="portfolio">

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

                    <Project
                        id="4"
                        name="Weather App"
                        description="Created a weather app that shows a 5 day weather forecast using an API"
                        github="https://github.com/chinosj89/weathering-with-you"
                        deployedSite="https://chinosj89.github.io/weathering-with-you/"
                        image={weatherPicture}
                    />

                    <Project
                        id="5"
                        name="Note Taker"
                        description="This challenge was for us to create an application called Note Taker that we can use to write and save notes using Express.js"
                        github="https://github.com/chinosj89/fantastic-spork"
                        deployedSite="https://fierce-river-52368-f7b57518909a.herokuapp.com/"
                        image={notePicture}
                    />

                    <Project
                        id="6"
                        name="Work Day Scheduler"
                        description="As a student, we are to create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm)."
                        github="https://github.com/chinosj89/fluffy-work-day"
                        deployedSite="https://chinosj89.github.io/fluffy-work-day/"
                        image={workDayPicture}
                    />


                </div>
            </div>
        </>
    )
}
export default ProjectPage;