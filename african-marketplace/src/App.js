import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/login'>
       <Login/>
      </Route>
      <Route path= '/landingPage'>
      <LandingPage/>
      </Route>
    </Switch>
    <Footer/>
    </div>
  )
}

export default App;
