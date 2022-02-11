import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import DeleteItem from './DeleteItem';



const initialItems = [];

export default function EditItem(props) {
    let details = props.details


    const initialFormValues = {
        item_name: props.details.item_name, 
        item_image: props.details.image_name,
        item_description: props.details.item_description,
    };

    const [items, setItems] = useState(initialItems);
    const [formValues, setFormValues] = useState(initialFormValues);
    
    const editNewItem = item => {

        axiosWithAuth().put(`https://bwproject.herokuapp.com/api/items/${props.details.item_id}`, item)
            .then(res => {
                setItems([res.data, ...items])
            }).catch(err => console.error(err))
            .finally(() => setFormValues(initialFormValues))
    }
 
    const onSubmit = (e) => {
        e.preventDefault();
        
        editNewItem(formValues);
    
    }
  
    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        });
    }

    return (
        <form className = 'edit-form' onSubmit={onSubmit}>
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
            <button className='submit-btn' onClick={onSubmit}>edit</button>
            <DeleteItem details = {details}/>
        </form>
        
    )};
    
    // END OF ADD ITEM FUNCTION

