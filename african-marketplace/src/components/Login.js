import React, { useState } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

const initialFormValues = { 
    username: '',
    password: ''
}
function Login({refreshLoggedIn}) {
    const { push } = useHistory()
    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = evt => {
        const {name, value} = evt.target
        setFormValues({...formValues, [name]:value})
    }
    const onSubmit = evt => {
        evt.preventDefault()
        axios.post(`${url}/api/auth/login`, formValues)
        .then((res)=> {
            console.log(res)
            refreshLoggedIn()
            push('/landing')
        }).catch(()=>{
            alert('invalid credentials. try again')
        })
    }
    return(
        <form className='register-wrapper' onSubmit={onSubmit}>
            <label>Username:
            <input 
            value = {formValues.username}
            name= 'username'
            type='text'
            onChange={onChange}
            />
            </label>
            <label>Password:
            <input 
            value={formValues.password}
            name = 'username'
            type='password'
            onChange={onChange}
            />
            </label>
            <button>Log In</button>


        </form>
    )
}

export default Login;