import './testimonials.css'
import AVATAR1 from "../../assets/avatar1.jpg"
import AVATAR2 from "../../assets/avatar2.jpg"
import AVATAR3 from "../../assets/avatar3.jpg"
import AVATAR4 from "../../assets/avatar4.jpg"

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVATAR1,
        name: "Tina Snow",
        review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas, ratione magni? Repudiandae sapiente sit odit
        sint vel soluta quos quia alias et! Laboriosam consequuntur
        provident perferendis sunt dolorem porro quibusdam.`
    },
    {
        avatar: AVATAR2,
        name: "Shatta Wale",
        review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas, ratione magni? Repudiandae sapiente sit odit
        sint vel soluta quos quia alias et! Laboriosam consequuntur
        provident perferendis sunt dolorem porro quibusdam.`
    },
    {
        avatar: AVATAR3,
        name: "Kwame Despite",
        review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas, ratione magni? Repudiandae sapiente sit odit
        sint vel soluta quos quia alias et! Laboriosam consequuntur
        provident perferendis sunt dolorem porro quibusdam.`
    },
    {
        avatar: AVATAR4,
        name: "Shah Rukh Khan",
        review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas, ratione magni? Repudiandae sapiente sit odit
        sint vel soluta quos quia alias et! Laboriosam consequuntur
        provident perferendis sunt dolorem porro quibusdam.`
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonals</h2>

            <Swiper className="container testimonials_container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map((curdata) => {
                        return (
                            <SwiperSlide className="testimonial" key={curdata.name}>
                                <div className="client_avatar">
                                    <img src={curdata.avatar} alt="avatar1" />
                                </div>
                                <h5 className="client_name">{curdata.name}</h5>
                                <small className="client_review">
                                    {curdata.review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}
export default Testimonials