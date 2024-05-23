// App.js
import React from 'react';
import Slide from '../helpers/Slide';

const App = () => {
    const pizzas = [
        {
            imageUrl: 'https://example.com/pizza1.jpg',
            title: 'Pepperoni Pizza',
            description: 'Classic pepperoni pizza with tomato sauce and mozzarella cheese.'
        },
        {
            imageUrl: 'https://example.com/pizza2.jpg',
            title: 'Margherita Pizza',
            description: 'Traditional Italian pizza with tomato, mozzarella cheese, and basil.'
        },
        // Add more pizza objects here
    ];

    return (
        <div className="App">
            <h1>Pizza Slider</h1>
            <Slide pizzas={pizzas} />
        </div>
    );
};

export default App;
