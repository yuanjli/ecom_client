import React, { Component } from 'react';
// import Hslider from './Hslider';
// import Hpromotion from './Hpromotion'
import Signup from '../auth/Signup';

class Home extends Component {
  render() {
    return(
    	<div className="home-container">
		    <div className="row">
		        <div className="col-lg-8 d-none d-lg-block">
		            <h1 className="display-4">Build <strong>social profiles</strong> and create account now! </h1>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                	You can share your posts in the groups and other people can comment on it.
		                </div>
		            </div>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                	You can add a picture and post them in the groups and share with everyone .
		                </div>
		            </div>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                  	Drumcircle group is every drumer's dream.
		                </div>
		            </div>
		        </div>
		        <div className="col-lg-4">
		            <Signup user={this.props.user} updateUser={this.props.updateUser} />
		        </div>
		    </div>
			<br />
			</div>
      );
  }
}

export default Home;

