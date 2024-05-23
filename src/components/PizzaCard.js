import React, { useState, useEffect } from "react";
import '../styles/PizzaCard.css';
import Pineapple from "../assets/pineapple.jpg";
import BBQ from "../assets/pepperoni.jpg";
import Vegietable from "../assets/vegan.jpg";

const pizzas = [
    { name: "Pineapple", image: Pineapple },
    { name: "BBQ", image: BBQ },
    { name: "Vegietable", image: Vegietable }
];

const offers = [
    { name: "50% off on all pizzas", description: "Limited time offer" },
    { name: "Buy one get one free", description: "Valid on all sizes" },
    { name: "Free delivery on orders above Rs.3000", description: "Applicable for online orders" }
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % pizzas.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []); // Empty dependency array, effect runs once on mount

    return (
        <div className="carousel">
            <div className="slides-container">
                {pizzas.map((pizza, index) => (
                    <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
                        <img src={pizza.image} alt={pizza.name} />
                        <h2>{pizza.name}</h2>
                    </div>
                ))}
            </div>
            <div className="offers">
                <h2>Best Offers</h2>
                <ul>
                    {offers.map((offer, index) => (
                        <li key={index}>
                            <strong>{offer.name}</strong>: {offer.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Carousel;
