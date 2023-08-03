import React from 'react'
import telegram from '../../assets/telegram.png'
import instagram from '../../assets/instagram.png'
import '../Carusel/Carusel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carusel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className='carusel'>
            <Slider {...settings}>
                <a href="https://t.me/orchideepharm_uz">
                    <img src={telegram} alt="" />
                </a>
                <a href="https://www.instagram.com/biomaral_uz/">
                    <img src={instagram} alt="" />
                </a>
            </Slider>
        </div>
    )
}
export default Carusel