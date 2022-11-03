import './header.css'
import CTA from './CTA'
import SocialMedia from './SocialMedia'
import ME from "../../assets/me.png"
const Header = () =>{
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Abishek Shah</h1>
                <h5 className="text-light">FrontEnd Developer</h5>
                <CTA/>

                <SocialMedia/>

                <div className="me">
                    <img src={ME} alt="me" className='img1'/>
                </div>

                <a href="#contact" className="scroll_down">Scrol Down</a>

            </div>
        </header>
    )
}

export default Header