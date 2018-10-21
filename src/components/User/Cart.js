import React, { Component } from 'react';
import UserLayout from '../../HighOrder/user';

import { connect } from 'react-redux';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile'


class Cart extends Component {
  render() {
    if(this.props.user){
      return (
        <UserLayout> 
          <div className="home-container">
            <h2>Cart Page!</h2>
            <h3> Lastname: {this.props.user.lastname} </h3>
            <h3> name: {this.props.user.name} </h3>

            <h4>Your email is {this.props.user.email}</h4>

          </div>
          </UserLayout>
        );
    }
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Cart;