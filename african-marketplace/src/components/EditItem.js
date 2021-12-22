import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
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

    const editItem = item => {

        // put the new item
        axiosWithAuth().put('https://bwproject.herokuapp.com/api/auth/items', item)
            .then(res => {
                // make sure that it is res.data pretty please
                setItems([res.data, ...items])
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
        const item = {
            name:formValues.name.trim(),
            photo:formValues.photo.trim(),
            description:formValues.description.trim(),
        }
        editItem(item);
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
            <button className='submit-btn'>edit item</button>
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

    

