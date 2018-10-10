import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './nav.css';


class Nav extends Component {
  handleLogout = (e) => {
    console.log('logging out...');
    e.preventDefault();
    localStorage.removeItem('LoginToken');
    this.props.updateUser();
  }

  constructor(props){
    super(props);
    this.state = {
      ballStyles: {},
      headingOne: {opacity: '1'},
      headingTwo: {opacity: '0.3'},
      text: {}
    }
  }


  scale = (x, size) => {
    return new Promise( (res, rej) => {
      this.setState({
        ballStyles: {
          transform: `translateX(${x}px) scale(${size})`,
        }
      })
      window.setTimeout(res.bind(null,'really done'), 300)
    })
  }

  moveAlongX = (x, duration) => {
    return new Promise( (res, rej) => {
      this.setState({
        ballStyles: {
          transform: `translateX(${x}px)`,
        }
      })
      window.setTimeout( () => {
        res('done moving');
      }, duration);      
    })
  }
  animate = (direction) => {

    if (direction === 'go-right') {
      this.setState({
        headingOne: { opacity: '0.3' },
        headingTwo: { opacity: '1'}
      })
    } else {
      this.setState({
        headingOne: {opacity: '1' },
        headingTwo: {opacity: '0.3'}
      })
    }
    
    const getPixels = (direction) =>
      direction === 'go-right' ? 220 : 0;
    
    const x = getPixels(direction);
    
    this.moveAlongX(x, 300)
      .then( () => this.scale(x, 1.5) )
      .then( () => this.scale(x, 1) )
  
  }

  render(){
    let links = '';
    if(this.props.user){
      links = (
          <span>
            <a onClick={this.handleLogout}>Logout</a>
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
        <div className="text-container">
        
           <nav className="nav">
            <Link to="/">Home</Link>
            {links}
          </nav>
  
          <h1
          className="header-text"
          onClick={this.animate.bind(this,'go-left')}
          style={this.state.headingOne}
          >Web Development</h1>

          <h1
          className="header-text"
          onClick={this.animate.bind(this,'go-right')}
          style={this.state.headingTwo}
          >Business</h1>
          
        </div>
        
        <div className="ball" style={this.state.ballStyles}></div>
        <div className="rail"></div>
        
        <div className="content-box">
        <p style={this.state.text}>
            Chia raw denim biodiesel taxidermy affogato, readymade PBR&B blog wolf umami synth butcher salvia. Wolf kickstarter plaid fingerstache, thundercats pickled cray messenger bag lomo hoodie tattooed fixie. Cardigan tilde leggings, iPhone sustainable pinterest pour-over wayfarers jean shorts offal stumptown. Fap man braid mixtape, leggings vegan typewriter flannel 3 wolf moon.
        </p>
        
        <p style={this.state.text}>
          Normcore viral pork belly, letterpress tacos asymmetrical thundercats ugh. Direct trade kombucha kogi crucifix. Ethical ramps small batch man bun artisan, pinterest literally migas taxidermy schlitz gastropub readymade brooklyn seitan.
        </p>
          
        </div>
      </div>


    )
  }
}




export default Nav;
