import React, { useState } from 'react';
// for redirect from login to dashboard
import { useHistory } from 'react-router-dom';
// to replace axios api call
import axiosWithAuth from '../utils/axiosWithAuth';
import url from './URL';

// initial form values
const initialFormValues = {
  username: '',
  password: '',
  error: false
}

const Login = () => {
  // for redirect to add push(')
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
    axiosWithAuth().post(`${url}/api/auth/login`, formValues)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        // console.log(res);
        // push('/');
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

  return (
    <div>
      
    </div>
  )
}

export default Login;
