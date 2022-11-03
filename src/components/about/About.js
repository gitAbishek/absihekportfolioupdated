import './about.css'
import ME from "../../assets/me.png"
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
                <small>Beginer </small>
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
                Hi, I am Web Developer. I have completed my bachelor in Computer Science and Engineering.
                working as a Web developer is one of the best experience of my life. Learning new technology makes me happy.
                My skills as a Front end developer are HTML-5, CSS-3, React, Javascript. 
             </p>

             <a href="#contact" className="btn btn-primary">Let's Talk</a>
            
            </div>
            </div>

        </section>
    )
}

export default About