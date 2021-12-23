import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function DeleteItem(props) {

    const deleteItem = () => {
       
        axiosWithAuth().delete(`https://bwproject.herokuapp.com/api/items/${props.details.item_id}`)
            .then(res => {
                console.log('hello from res', res)              
            }).catch(err => console.error('log from error', err.response.data.message))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        deleteItem();
    }
    
    return (
        <div>
            <button className='submit-btn' onClick={onSubmit}>delete item</button>
        </div>
        
    )};