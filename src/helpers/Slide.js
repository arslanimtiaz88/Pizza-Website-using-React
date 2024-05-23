// Slide.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PizzaCard from '../components/PizzaCard';

const Slide = ({ pizzas }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {pizzas.map((pizza, index) => (
                <div key={index}>
                    <PizzaCard {...pizza} />
                </div>
            ))}
        </Slider>
    );
};

export default Slide;
