// Testimonial.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Testimonial.css';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="testimonial-container">
            <h2>Customer Reviews</h2>
            <Slider {...settings}>
                <div className="testimonial-slide">
                    <p>"Pizza quality is excellent, yummmmy taste, wide range of variety. 24 inches larger pizza is a good treat for the family. W had been twice for in-dinning, otherwise we usually order home delivery. Service is fast and it is always fresh and oven hot. price is really competitive, and it is worth of it. good value for money.
                        !"</p>
                    <p>- Muhammad Zohan</p>
                </div>
                <div className="testimonial-slide">
                    <p>"They offer an awesome range of fresh pizzas. I liked dining here. Staff members are always friendly, prices are reasonable and the spot is always kept clean."</p>
                    <p>- Muhammad Saad</p>
                </div>
                <div className="testimonial-slide">
                    <p>"I had the best pizza of my life at that time. Since then I have visited this place numerous times and my opinion about this pizza has still not changed.."</p>
                    <p>- Hamza</p>
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default Testimonial;
