import React from 'react';
import '../styles/Footer.css'; // Import your CSS file for styling


const Footer = () => {
    return (
        <footer className="footer">
            <div className="left">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="center">
                <address>
                    Address: Range Road Rawalpindi <br />
                    Website: pizzacorner.pk <br />
                    Email: pizzacorner@gmail.com <br />
                    Phone: 0513456789
                </address>
            </div>
            <div className="right">
                <p> Follow us</p>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://whatsapp.com">Whatsapp</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

