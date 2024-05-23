import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${MultiplePizzas})` }}
            ></div>
            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Pizza Corner is a popular chain of pizza restaurants known for its delicious pizzas and variety of toppings. It was founded in Pakistan in the early 1990s and quickly became a favorite destination for pizza lovers.

                    The chain offers a wide range of pizza options, including both vegetarian and non-vegetarian choices, catering to diverse tastes. Over the years, Pizza Corner has expanded its presence across various cities in Pakistan and has gained a reputation for its quality ingredients and flavorsome pizzas.

                    In addition to traditional pizzas, Pizza Corner also offers sides like garlic bread, pasta, and desserts to complement the main course. The chain has focused on maintaining consistency in taste and quality, which has contributed to its enduring popularity among customers.
                </p>
            </div>
        </div>
    );
}

export default About;
