import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () =>{
    return(
        <footer>
            <a href="#" className="footer_logo">Shah Abishek</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>

            <div className="footer_socials">

                <a href="https://www.facebook.com/rock.ey.549/#"target="_blank" >
                <FaFacebookF className="footer_socials-icon"/>
                </a>

                <a href="https://www.instagram.com/abishekshah7/#"target="_blank">
                <FiInstagram className="footer_socials-icon"/>
                </a>

                <a href="https://twitter.com/iamavi7#"target="_blank">
                <IoLogoTwitter className="footer_socials-icon"/>
                </a>

            </div>

            <div className="footer_copyright">
                <small>&copy; Shah Abishek. All Rrights reserviced</small>
            </div>
        </footer>
    )
}

export  default Footer