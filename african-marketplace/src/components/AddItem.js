// needs a form that posts

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';

const initialFormValues = {
    name: '', 
    photo: '',
    description: '',
};

const initialFormErrors = {
    name: '',
    photo:'', 
    description: '',
};

const initialItems = [];
const initialDisabled = true;

export default function AddItem(props) {

    // STATES

    const [items, setItems] = useState(initialItems);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    // HELPERS

    const postNewItem = newItem => {

        // post the new item
        axios.post('https://bwproject.herokuapp.com/api/items', newItem)
            .then(res => {
                // make sure that it is res.data pretty please
                setItems([res, ...items])
            }).catch(err => console.error(err))
            .finally(() => setFormValues(initialFormValues))
    }

    // EVENT HANDLERS

    // cancel function
    const onCancel = evt => {
        evt.preventDefault()
        
    }

    // submit function
    const onSubmit = () => {
        const newItem = {
            name:formValues.name.trim(),
            photo:formValues.photo.trim(),
            description:formValues.description.trim(),
        }
        postNewItem(newItem);
    }

    // change function
    const onChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <h3> Add Item </h3>
            <input 
                name='name'
                type='text'
                value={props.item_name}
                onChange={onChange}
                placeholder='enter item name'
            />
            <input
                name='photo'
                type=''
                value={props.item_image}
                onChange={onChange}
                placeholder='enter item photo url here'
            />
            <input 
                name='description'
                type='text'
                value={props.item_description}
                onChange={onChange}
                placeholder='enter item description'
            />
            <button className='submit-btn'>add item</button>
            <button className='cancel-btn' onClick={onCancel}>cancel</button>

            {
            items.map(item => {
                return (
                    <ItemCard key={item.item_id} details={item} />
                )
            })
             }
        </form>
        
    )};
    
    // END OF ADD ITEM FUNCTION

    // TO DO LIST
    // const isDisabled needs to be added
    // errors need to be handled

