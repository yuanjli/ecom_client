import React, { Component } from 'react';
import './App.css';
import './Resources/styles.css'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Home from './components/Home';
import Signup from './auth/Signup';
import Login from './auth/Login';
import UserLayout from './Profile';


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
        localStorage.removeItem('LoginToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      console.log('No token was found');
     // localStorage.removeItem('LoginToken');
      this.setState({
        user: null
      });
    }
  }

  render() {
    return (
      <div className="App">

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
              () => (<UserLayout user={this.state.user} />)
            } />

          </div>
        </Router>


        <p> TEST message: The header is way too big! </p>
        <Footer />
      </div>
    );
  }
}

export default App;
