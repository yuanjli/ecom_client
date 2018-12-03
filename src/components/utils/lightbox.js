import React, { Component } from 'react';
import Lightbox from 'react-images';

class ImageLightBox extends Component {

	state = {
		lightboxIsOpen: true,
		currentImage: this.props.pos,
		images: []
	}




	render() {
		return (
			<Lightbox 


			/>);

	}


}


export default ImageLightBox;