import { useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {IoMdContact} from "react-icons/io"
import {AiFillProject} from "react-icons/ai"

const Nav = () =>{
    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" 
            className={activeNav === '#' ? 'active' : ''}
            ><AiOutlineHome/></a>

            <a href="#about"
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}
            ><AiOutlineUser/></a>

            <a href="#experience"
             onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}
            ><BiBook/></a>

            <a href="#services"
             onClick={() => setActiveNav('#services')}
            className={activeNav === '#services' ? 'active' : ''}
            ><RiServiceLine/></a>

            <a href="#portfolio"
             onClick={() => setActiveNav('#portfolio')}
            className={activeNav === '#portfolio' ? 'active' : ''}
            ><AiFillProject/></a>

            <a href="#contact"
             onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}
            ><IoMdContact/></a>
        </nav>
    )
}

export default Nav