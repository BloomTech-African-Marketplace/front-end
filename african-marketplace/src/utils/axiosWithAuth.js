import axios from 'axios';
import url from '../components/URL'

// axiosWithAuth to replace axios in all api calls
const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return (
    axios.create({
      headers: {
        authorization: token
      },
      baseURL: url
    })
  )
}

export default axiosWithAuth;
