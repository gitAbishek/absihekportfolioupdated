import './services.css'
import {BiCheck} from "react-icons/bi"

const Services = () =>{
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services_container">
            <article className="service">
                <div className="service_header">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className="service_list">
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Competitive and tailored design</p>
                </li>
                

               
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Design to meet your customer service and marketing objectives</p>
                </li>
                

                
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Show you the live demo of the design depending how much completed</p>
                </li>
                

                
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Meaningful and relevant experience</p>
                </li>
                

                </ul>

            </article>

            <article className="service">
                <div className="service_header">
                    <h3>Web Development</h3>
                </div>

                <ul className="service_list">
        
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Customized Web Development</p>
                </li>

                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Static Web Services</p>
                </li>

                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>eCommerce Development</p>
                </li>

                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Website Maintenance</p>
                </li>

                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Dynamic Web Services</p>
                </li>

                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>FullStack Development</p>
                </li>

                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Website Maintenance</p>
                </li>

                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Dynamic Web Services</p>
                </li>

                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>FullStack Development</p>
                </li>

                </ul>

            </article>

            <article className="service">
                <div className="service_header">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className="service_list">
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Competitive and tailored design</p>
                </li>
                

               
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Design to meet your customer service and marketing objectives</p>
                </li>
                

                
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Show you the live demo of the design depending how much completed</p>
                </li>
                

                
                <li>
                <BiCheck className="service_list-icon"/>
                
                <p>Meaningful and relevant experience</p>
                </li>
                

                </ul>

            </article>
            </div>
        </section>
    )
}

export default Services