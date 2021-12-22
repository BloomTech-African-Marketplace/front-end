import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import url from './URL';

const initialFormValues = { 
    username: '',
    password: ''
}
const Login = () => {
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
        axiosWithAuth().post(`${url}api/auth/login`, formValues)
          .then(res => {
            localStorage.setItem('token', res.data.token);
            console.log(res);
            // update push below to dashboard route when complete
            push('/');
          })
          .catch(err => {
            setFormValues({
              ...formValues            });
          })
      }

    return(
        <form className='register-wrapper' onSubmit={handleSubmit}>
            <label>Username:
                <input 
                    value={formValues.username}
                    name='username'
                    type='text'
                    placeholder='Username'
                    onChange={handleChange}
                />
            </label>
            <label>Password:
                <input 
                    value={formValues.password}
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                />
            </label>
            <button>Log In</button>
            {/* <p>{error}</p> */}
        </form>
    )
}

export default Login;
