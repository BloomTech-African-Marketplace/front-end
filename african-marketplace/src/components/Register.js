import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import url from './URL';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    username: '',
    password: '',
    email: ''
}

const Register = () => {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`${url}api/auth/register`, formValues)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                // console.log(res);
                push('/login');
            })
            .catch(err => {
                console.error(err);
                // below to be confirmed upon completion of backend api
                // setFormValues({
                //   ...formValues,
                //   error: err.response.data.error
                // });
            })
    }

    return(
        <form className='register-wrapper' onSubmit={handleSubmit}>
            <label>Username:
                <input 
                    value={formValues.username}
                    name='username'
                    type='text'
                    placeholder='Enter your new username here'
                    onChange={handleChange}
                />
            </label>
            <label>Password:
                <input
                    value={formValues.password}
                    name='password'
                    type='password'
                    placeholder='Enter your new password here'
                    onChange={handleChange}
                />
            </label>
            <label>Email:
                <input
                    value={formValues.email}
                    name='email'
                    type='email'
                    placeholder='Enter your email here'
                    onChange={handleChange}
                />
            </label>
            <button>Register</button>
        </form>
    )
}

export default Register;
