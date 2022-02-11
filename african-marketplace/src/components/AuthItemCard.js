import React from 'react';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';

export default function AuthItemCard({ details }) {
    if (!details) {
        return <h3>Working to fetch your item... </h3>
    }

    return (
        <div className='card-container-dash'>
            <div>
            <h2> { details.item_name} </h2>
            <img src= {`${details.item_image}`} alt='item that was uploaded'/>
            <p> {details.item_description}</p>
            </div>
            <EditItem 
                details={details}
            />
        </div>

    )};