
import Project from "../components/Project/Project"
import moviePicture from "../assets/2ndProject.png"
import techPicture from "../assets/techBlog.png"
import weatherPicture from "../assets/weatherApp.png"
import notePicture from "../assets/noteTaker.png"
import getFitPicture from "../assets/getFit.png"
import background from "../assets/resume.png"
import nextjs from "../assets/nextjs.png"
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
                        name="Fitness Tracker"
                        description="As a user, I want to be able to track my fitness journey every single day"
                        github="https://github.com/danielfama14/get-fit"
                        deployedSite="https://get-fit-project-2dc6ca113c41.herokuapp.com/"
                        image={getFitPicture}
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
                        name="Nextjs Project"
                        description="Created a Nextjs project to learn nextjs and email verifications"
                        github="https://github.com/chinosj89/nextjs-auth"
                        deployedSite="https://nextjs-auth-ten.vercel.app"
                        image={nextjs}
                    />


                </div>
            </div>
        </>
    )
}
export default ProjectPage;