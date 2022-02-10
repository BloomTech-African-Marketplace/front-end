
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    item_name: '', 
    item_image: '',
    item_description: '',
};

// const initialFormErrors = {
//     item_name: '',
//     item_photo:'', 
//     item_description: '',
// };

const initialItems = [];
// const initialDisabled = true;

export default function AddItem(props) {

    const [items, setItems] = useState(initialItems);
    const [formValues, setFormValues] = useState(initialFormValues);
    // const [formErrors, setFormErrors] = useState(initialFormErrors);
    // const [disabled, setDisabled] = useState(initialDisabled);
    

    // HELPERS

    const postNewItem = newItem => {
      
        axiosWithAuth().post('https://bwproject.herokuapp.com/api/items', newItem)
            .then(res => {
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
      
    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            item_name:formValues.item_name.trim(),
            item_image:formValues.item_image.trim(),
            item_description:formValues.item_description.trim(),
        }
        postNewItem(newItem);
    
    }

    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        });
    }
    return (
            <form className='register-wrapper' onSubmit={onSubmit}>
                <h3> Add Item </h3>
                <input 
                    name='item_name'
                    type='text'
                    value={formValues.item_name}
                    onChange={onChange}
                    placeholder='enter item name'
                />
                <input
                    name='item_image'
                    type=''
                    value={formValues.item_image}
                    onChange={onChange}
                    placeholder='enter item photo url here'
                />
                <input 
                    name='item_description'
                    type='text'
                    value={formValues.item_description}
                    onChange={onChange}
                    placeholder='enter item description'
                />
                <button className='submit-btn' onClick={onSubmit}>add item</button>
            </form>
        
    )};
    
    // END OF ADD ITEM FUNCTION

