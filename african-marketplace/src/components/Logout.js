import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const { push } = useHistory();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token) {
      localStorage.removeItem('token');
      push('/login');
    } else {
      push('/login');
    } 
  })
  

  return (
    <div></div>
  )
}

export default Logout;
