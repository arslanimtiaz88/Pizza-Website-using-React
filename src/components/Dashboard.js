import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li>Orders</li>
                    <li>Menu</li>
                    <li>Customers</li>
                    {/* Add more menu items as needed */}
                </ul>
            </div>
            <div className="main-content">
                <h2>Welcome to the Pizza Dashboard</h2>
                {/* Add your main content here */}
            </div>
        </div>
    );
}

export default Dashboard;
