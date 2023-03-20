import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { Component } from 'react';
import {reviewsData} from "./data";
import './Reviews.css'
import H2 from '../h2/H2';

class Reviews extends Component {
    render() {
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 5000, min: 1600 },
          items: 4
        },
        LargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1600, min: 1200 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 992, min: 768 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 768, min: 576 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };
      
        return (
          <div className='reviews_container'>
            <H2 data='Отзывы наших клиентов' />
            <Carousel responsive={responsive} infinite={true} autoPlay={this.props.deviceType !== "mobile" ? true : false} autoPlaySpeed={3000} transitionDuration={500}>
                {reviewsData.map(item => (
                    <div className='reviews_item'>
                        <div className='reviews_item-top'>
                            <div className='reviews_item-avatar'>
                                <img src={"./img/" + item.img} alt="author" />
                            </div>
                            <div className='reviews_item-title'>
                                <h3 className='reviews_author'>{item.author}</h3>
                                <h4 className='reviews_product'>{item.product}</h4>
                            </div>
                        </div> 
                        <p className='reviews_desc'>{item.desc}</p>
                    </div>
                ))}
            </Carousel>
            </div>
        );
    }
}

export default Reviews;