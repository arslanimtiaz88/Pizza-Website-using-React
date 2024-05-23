import React from "react";


function MenuItem({ name, price, image }) {
    return (
        <div className="menuItem">
            <div className="menuItemImg" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="menuItemDetails">
                <h1>{name}</h1>
                <p>Rs.{price}</p>
            </div>
        </div>
    );
}

export default MenuItem;
