import React, { Component } from 'react';


class ProdImg extends Component {

	state = {
		lightbox: false,
		imagePos: 0,
		lightboxImages: []
	}


	componentDidMount(){
		if(this.props.detail.images.length > 0){
			let lightboxImages = [];

			this.props.detail.images.forEach(item =>{
				lightboxImages.push(item.url)
			})

			this.setState({
				lightboxImages
			})
		}
	}


	render() {
		// console.log(this.state)
		return (
			<div>


			</div>
			);
	}


}


export default ProdImg;