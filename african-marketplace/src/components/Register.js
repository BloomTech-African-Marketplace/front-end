import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'


const initialFormValues = {
     username: '',
     password: '',
     email: ''
}

function Register(){
    const [formValues, setFormValues] = useState(initialFormValues)
    const { push } = useHistory()
    const onChange = evt => {
        const {name, value} = evt.target
        setFormValues({...formValues, [name]:value})
    }
    const onSubmit = evt => {
        evt.preventDefault();
        axios
        .post(`https://bwproject.herokuapp.com/api/auth/register`, formValues)
        .then((res)=> {
            console.log(res.data)
           
            
            
        })  
        .catch((err)=> {
            console.error(err)
        })
    }
    return(

        <form className='register-wrapper' onSubmit={onSubmit}>
            <label>Username:
            <input 
            value= {formValues.username}
            name='username'
            type= 'text'
            onChange={onChange}
            />
            </label>
            <label>Password:
            <input
            value={formValues.password}
            name='password'
            type='password'
            onChange={onChange}
            />
            </label>
            <label>Email:
            <input
            value={formValues.email}
            name='email'
            type='email'
            onChange={onChange}
            />
            </label>
            <button>Register</button>

        </form>

    )
}

export default Register;