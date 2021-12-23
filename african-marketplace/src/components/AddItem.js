// needs a form that posts

import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AuthItemCard from './AuthItemCard';

const initialFormValues = {
    item_name: '', 
    item_image: '',
    item_description: '',
};

const initialFormErrors = {
    item_name: '',
    item_photo:'', 
    item_description: '',
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
       // console.log('hello from postNewItem', newItem);
        // post the new item
        axiosWithAuth().post('https://bwproject.herokuapp.com/api/items', newItem)
            .then(res => {
                // make sure that it is res.data pretty please
                console.log('hello from res', res);
                setItems([res.data, ...items])
            }).catch(err => console.error(err))
            .finally(() => setFormValues(initialFormValues))
    }

    useEffect(() => {
        axiosWithAuth().get('https://bwproject.herokuapp.com/api/auth/items')
        .then(res => {
            setItems(res.data)
        }).catch(err => console.error(err))
        .finally(() => setFormValues(initialFormValues))

    }, [])
      


    // EVENT HANDLERS

    // cancel function
    const onCancel = evt => {
        evt.preventDefault()
        
    }

    // submit function
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('hello from onSubmit');
        const newItem = {
            item_name:formValues.item_name.trim(),
            item_image:formValues.item_image.trim(),
            item_description:formValues.item_description.trim(),
        }
        console.log('hello from onSubmit newItem', newItem)
        postNewItem(newItem);
    
    }

    // change function
    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        });
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3> Add Item </h3>
                <input 
                    name='item_name'
                    type='text'
                    value={props.item_name}
                    onChange={onChange}
                    placeholder='enter item name'
                />
                <input
                    name='item_image'
                    type=''
                    value={props.item_image}
                    onChange={onChange}
                    placeholder='enter item photo url here'
                />
                <input 
                    name='item_description'
                    type='text'
                    value={props.item_description}
                    onChange={onChange}
                    placeholder='enter item description'
                />
                <button className='submit-btn' onClick={onSubmit}>add item</button>
                <button className='cancel-btn' onClick={onCancel}>cancel</button>
            </form>
            
                {
                items.map(item => {
                    return (
                        <AuthItemCard key={item.item_id} details={item} />
                    )
                })
                }
        </div>
        
    )};
    
    // END OF ADD ITEM FUNCTION

    // TO DO LIST
    // const isDisabled needs to be added
    // errors need to be handled
    // delete in editItemCard
    // do you need useEffect?

