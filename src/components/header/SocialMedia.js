import {BsGithub} from "react-icons/bs"
import {FaLinkedin} from "react-icons/fa"
import {CiFacebook} from "react-icons/ci"

const SocialMedia = () =>{
    return (
        <div className="social_media">
            <a href="https://www.linkedin.com" target="_blank"><BsGithub/></a>
            <a href="https://www.githunb.com" target="_blank"><FaLinkedin/></a>
            <a href="https://www.facebook.com" target="_blank"><CiFacebook/></a>
        </div>
    )
}

export default SocialMedia