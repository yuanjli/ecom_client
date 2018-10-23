import React, { Component } from 'react';
import UserLayout from '../../HighOrder/user';
import UserProductBlock from '../utils/User/product_block';

import { connect } from 'react-redux';
import { getCartItems } from '../../actions/user_actions';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile'


class Cart extends Component {

  state = { 
    loading: true,
    total:0,
    showTotal: false,
    showSuccess: false,

  }

  // Creating two variables here: 
  componentDidMount(){
    let cartItems = [];
    let user = this.props.user;

    if(user.userData.cart){
      if(user.userData.cart.length > 0){

        user.userData.cart.forEach(item => {
          cartItems.push(item.id)
        });

        // dispatch: 
        this.props.dispatch(getCartItems(cartItems, user.userData.cart))
        .then(()=> {
          
        })

      }

    }

  }

  render() {
    if(this.props.user){
      return (
        <UserLayout> 
          <h2>My Cart</h2>
          <div className="user_cart">
            <UserProductBlock
              products={this.props.user}
              type="cart"
              removeItem={(id)=> this.removeFromCart(id)}

              />

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


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Cart);