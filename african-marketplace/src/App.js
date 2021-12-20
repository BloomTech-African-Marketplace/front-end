import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (
    <Switch>
      <Route path='/register'>
        <button id='register-button'>Register</button>
        <Register />
      </Route>
      <Route path='/login'>
      <button id='login-button'>Login</button>
       <Login/>
      </Route>
    </Switch>
  )
}

export default App;
