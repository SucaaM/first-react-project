import React from 'react';

function MenuItem(props) {
    return (
        <div className="menu-item">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>${props.price}</p>
        </div>
    );
}

export default MenuItem;
