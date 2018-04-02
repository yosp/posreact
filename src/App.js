import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom'

import './App.css';

//My imports 
import UserRegister from './components/UsersAuth/Register'
// import Login from './components/UsersAuth/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pos Web App</h1>
        </header>
        {/* <BrowserRouter>
        
        </BrowserRouter> */}
        <UserRegister></UserRegister>
        {/* <Login></Login> */}
      </div>
    );
  }
}

export default App;
