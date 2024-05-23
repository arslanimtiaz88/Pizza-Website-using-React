import React, { useState } from "react";
import axios from "axios";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("/submit", formData);
            alert("Message sent successfully!");
            // Optionally clear the form after submission
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("Error submitting message:", err);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${PizzaLeft})` }}
            ></div>
            <div className="rightSide">
                <h1> Contact Us</h1>

                <form id="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        name="name"
                        placeholder="Enter full name..."
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        placeholder="Enter email..."
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
