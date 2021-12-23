import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

import './App.css';


const App = () => {
  return (
    <div>
      <Header/>
      <Switch>

        <Route exact path='/'>
          <LandingPage/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>
        
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>

        <PrivateRoute exact path='/logout' component={Logout}/>
      </Switch>
    </div>
  )
}

export default App;
