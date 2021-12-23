import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    item_name: '', 
    item_image: '',
    item_description: '',
};

const initialItems = [];

export default function AddItem(props) {

    // STATES

    const [items, setItems] = useState(initialItems);
    const [formValues, setFormValues] = useState(initialFormValues);
    

    // HELPERS

    const deleteItem = () => {
       // console.log('hello from postNewItem', newItem);
        // post the new item
        axiosWithAuth().delete(`https://bwproject.herokuapp.com/api/items/${props.details.item_id}`)
            .then(res => {
                console.log('hello from res', res)              
            }).catch(err => console.error(err))
    }
      
    // EVENT HANDLERS

    // submit function
    const onSubmit = (e) => {
        e.preventDefault();
        deleteItem();
    }
    
    return (
        <div>
            <button className='submit-btn' onClick={onSubmit}>delete item</button>
        </div>
        
    )};