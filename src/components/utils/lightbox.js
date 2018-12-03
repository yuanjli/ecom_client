import React, { Component } from 'react';
import Lightbox from 'react-images';

class ImageLightBox extends Component {

	state = {
		lightboxIsOpen: true,
		currentImage: this.props.pos,
		images: []
	}

// Documentation for react Images
// https://github.com/jossmac/react-images
	
	static getDerivedStateFromProps(props, state){
		if(props.images){
			const images = [];
			props.images.forEach(element=>{
				images.push({src:`${element}`})
			});
			return state = {
				images 
			}
		}
		return false
	}

	closeLightbox = () => {
		this.props.onclose();
	}





	render() {
		return (
			<Lightbox 
				currentImage={this.state.currentImage}
				images={this.state.images}
				isOpen={this.state.lightboxIsOpen}
				onClickPrev={() => this.gotoPrevious()}
				onClickNext={() => this.gotoNext()}
				onClose={() => this.closeLightbox()}

			/>);

	}


}


export default ImageLightBox;