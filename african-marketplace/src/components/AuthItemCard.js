import React from 'react';
import EditItem from './EditItem';

export default function ItemCard({ details }) {
    if (!details) {
        return <h3>Working to fetch your item... </h3>
    }

    return (
        <div className='card-container'>
            <h2> { details.item_name} </h2>
            <img src= {`${details.item_image}`} alt='item that was uploaded'/>
            <p> {details.item_description}</p>
            <EditItem />
            
        </div>

    )};