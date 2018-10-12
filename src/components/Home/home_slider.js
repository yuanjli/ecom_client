import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/button';

class HomeSlider extends React.Component {
    render() {

    var slides1 = {

            img:'/images/jordan3.jpg',
            lineOne:'jordan',
            lineTwo:'Custom Style',
            linkTitle:'Shop now',
            linkTo:'/shop'
        }
    var slides2 = {
            img:'/images/Air_jordan_XI_space_jam.jpg',
            lineOne:'jordan',
            lineTwo:'Awesome discounts',
            linkTitle:'View offers',
            linkTo:'/shop'
        }
 
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }


    return (
      <Slider {...settings}>
      <div className="featured_container">
        <div className="featured_image"
                    style={{
                        background:`url(${slides1.img})`,
                        height:`${window.innerHeight}px`
                    }}
                >
                    <div className="featured_action">
                        <div className="tag title">{slides1.lineOne}</div>
                        <div className="tag low_title">{slides1.lineTwo}</div>
                        <div>
                            <MyButton
                                type="default"
                                title={slides1.linkTitle}
                                linkTo={slides1.linkTo}
                                addStyles={{
                                    margin:'10px 0 0 0'
                                }}
                            />
                        </div>
                    </div>
                </div>
                </div>
        </Slider>
    );
  }
}

export default HomeSlider;