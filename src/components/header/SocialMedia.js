import {BsGithub} from "react-icons/bs"
import {FaLinkedin} from "react-icons/fa"
import {CiFacebook} from "react-icons/ci"

const SocialMedia = () =>{
    return (
        <div className="social_media">
            <a href="https://github.com/gitAbishek" target="_blank"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/abishek-shah" target="_blank"><FaLinkedin/></a>
            <a href="https://www.facebook.com/rock.ey.549/" target="_blank"><CiFacebook/></a>
        </div>
    )
}

export default SocialMedia