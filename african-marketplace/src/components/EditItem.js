import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';



const initialItems = [];

export default function AddItem(props) {


    const initialFormValues = {
        item_name: props.details.item_name, 
        item_image: props.details.image_name,
        item_description: props.details.item_description,
    };

    // STATES

    const [items, setItems] = useState(initialItems);
    const [formValues, setFormValues] = useState(initialFormValues);
    

    // HELPERS

    const editNewItem = item => {

        axiosWithAuth().put(`https://bwproject.herokuapp.com/api/items/${props.details.item_id}`, item)
            .then(res => {
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
    const onSubmit = (e) => {
        e.preventDefault();
        // const item = {
        //     item_name:formValues.item_name.trim(),
        //     item_image:formValues.item_image.trim(),
        //     item_description:formValues.item_description.trim()
        // }
        editNewItem(formValues);
    
    }

    // change function
  
    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <h3> Edit Item </h3>
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
            <button className='submit-btn' onClick={onSubmit}>edit item</button>
            <button className='cancel-btn' onClick={onCancel}>cancel</button>
        </form>
        
    )};
    
    // END OF ADD ITEM FUNCTION

    // TO DO LIST
    // const isDisabled needs to be added
    // errors need to be handled
    // delete in editItemCard
    // do you need useEffect?

