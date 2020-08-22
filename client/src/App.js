import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js';
import PrivateRoute from './utils/PrivateRoute';
import FriendsList from './components/FriendsList.js';

function App() {
  return (
    <div className="App">

      <Route exact path='/' render={props => <Login {...props} />} />
      <PrivateRoute exact path='/FriendsList' component={FriendsList} />
    </div>
  );
}

export default App;
