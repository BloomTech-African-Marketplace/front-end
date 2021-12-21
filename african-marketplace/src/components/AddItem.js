// needs a form that posts

import React { useState, useEffect } from 'react';

initialFormState = {
    name: '', 
    photo: '',
    description: '',
}

export default function AddItem() {


    // cancel function
    const onCancel = evt => {
        evt.preventDefault()
        reset()
    }

    // submit function
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    // change function
    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value)
    }

    // const isDisabled needs to be added

    return (
        <form onSubmit={onSubmit}>
            <h3> Add Item </h3>
            <input 
                name='name'
                type='text'
                value={values.name}
                onChange={onChange}
                placeholder='enter item name'
            />
            <input
                name='image'
                type='' {/* CHECK THE DOCS FOR ADDING IMAGES */}
            />
            <input 
                name='description'
                type='text'
                value={values.description}
                onChange={onChange}
                placeholder='enter item description'
            />
            <button className='submit-btn'>submit</button>
            <button className='cancel-btn' onClick={onCancel}>cancel</button>
        </form>

    )};
