import './about.css'
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () =>{
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
            <div className="about_me">
            <div className="about_me-image">
                <img src={ME} alt="About-me Image" />
            </div>
            </div>
            
            <div className="about_content">
            <div className="about_cards">
             <article className="about_card">
                <FaAward className="awards_icon"/>
                <h5>Experience</h5>
                <small>1+ years Working</small>
             </article>

             <article className="about_card">
                <FiUsers className="awards_icon"/>
                <h5>Clients</h5>
                <small>200+ cards</small>
             </article>

             <article className="about_card">
                <VscFolderLibrary className="awards_icon"/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
             </article>
             </div>

             <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, laudantium?
                 Similique deserunt sapiente voluptate eum dolorem iusto quia, ab eligendi. 
                 Odio tempora sed fugiat dolores deserunt odit voluptatem ipsa recusandae.
             </p>

             <a href="#contact" className="btn btn-primary">Let's Talk</a>
            
            </div>
            </div>

        </section>
    )
}

export default About