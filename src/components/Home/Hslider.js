import React from 'react';
import Slider from 'react-slick';
// import MyButton from '../utils/button';

const Hslider = (props) => {


	const slides = [
		{
			img: '/images/jordan1.jpg',
			lineOne:'Jordan',
			lineTwo:'The greatest shoe',
			linkTitle:'Shop now',
			linkTo:'/services'
		},
		{
			img: '/images/jordan3.jpg',
			lineOne:'Jordan',
			lineTwo:'Very clean look',
			linkTitle:'Shop now',
			linkTo:'/services'
		}

	]

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrow: false
	}

	const generateSlides = () => (
		slides ?
            slides.map((item,i)=>(
                <div key={i}>
                    <div className="featured_image"
                        style={{
                            background:`url(${item.img})`,
                            height:`${window.innerHeight}px`
                        }}
                    >
                        <div className="featured_action">
                            <div className="tag title">{item.lineOne}</div>
                            <div className="tag low_title">{item.lineTwo}</div>
                            <div>
                                <MyButton
                                    type="default"
                                    title={item.linkTitle}
                                    linkTo={item.linkTo}
                                    addStyles={{
                                        margin:'10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        :null
    )

	return (
		<div className="featured_container">
			<Slider {...settings}>
				{ generateSlides() }
			</Slider> 

		</div>
	);
};

export default Hslider;