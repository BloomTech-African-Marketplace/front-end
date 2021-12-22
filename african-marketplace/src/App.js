import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';


const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>

        <Route exact path='/login'>
          <Redirect to="/"/>
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>

        <PrivateRoute exact path='/logout' component={Logout}/>
      </Switch>
    </div>
  )
}

export default App;
