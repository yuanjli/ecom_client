import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Home from './Home';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Profile from './Profile';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    console.log('component did mount!');
    this.getUser();
  }

  getUser = () => {
    var token = localStorage.getItem('LoginToken');
    if(token){
      console.log('token found in LS', token);
      // There is a token in localStorage. Try to validate it!
      axios.post(SERVER_URL + '/auth/me/from/token', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log('SUCCESS', response);
        this.setState({
          user: response.data.user
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        localStorage.removeItem('mernToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      console.log('No token was found');
     // localStorage.removeItem('mernToken');
      this.setState({
        user: null
      });
    }
  }

  render() {
    return (
      <div className="App">

        <header>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>

        <p> The header is way too big! </p>

        <Router>
        
          <div className="container">

            <Nav user={this.state.user} updateUser={this.getUser} />

            <Route exact path="/" component={Home} />

            <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser} />)
            } />

            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} />)
            } />

            <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } />

          </div>

        </Router>
        <Footer />

      </div>
    );
  }
}

export default App;
