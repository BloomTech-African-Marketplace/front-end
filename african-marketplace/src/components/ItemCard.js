// shape of the item

// should I put all of my axios helpers here? Or in the components they're used in?

import React from 'react';

export default function ItemCard({ details }) {
    if (!details) {
        return <h3>Working to fetch your item... </h3>
    }

    return (
        <div className='card-container'>
            <h2> Name </h2>
            
            <p> Description</p>
        </div>

    )};
