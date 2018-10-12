import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.svg';



class Nav extends Component {
  handleLogout = (e) => {
    console.log('logging out...');
    e.preventDefault();
    localStorage.removeItem('LoginToken');
    this.props.updateUser();
  }

  render(){
    let links = '';
    if(this.props.user){
      links = (
          <span>
            <Link to="/" onClick={this.handleLogout}>Logout</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
          </span>
        );
    }
    else {
      links = (
          <span>

            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </span>
        );
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="animated zoomIn delay-1s nav-item">
            <Link to="/" className="navbar-brand">
              <img src={ logo } className="navbar-logo" alt=""/>
               <strong>upBeat</strong> 
            </Link>            
          </li>
          
          </ul>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto">
              <Link to="/product">Product</Link>
              {links}
            </ul>
          </div>
          </div>
        </nav>
        <br />
        <br />
        </div>

    )
  }
}




export default Nav;




