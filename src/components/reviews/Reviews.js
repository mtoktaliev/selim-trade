import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { Component } from 'react';
import {reviewsData} from "./data";
import styles from './Reviews.module.css'
import H2 from '../h2/H2';

class Reviews extends Component {
    render() {
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 5000, min: 1600 },
          items: 3
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
          <section className={styles.reviews}>
          <div className={styles.reviews_container}>
            <H2 data='Отзывы наших клиентов' />
            <Carousel
            responsive={responsive} 
            infinite={true} 
            // autoPlay={this.props.deviceType !== "mobile" ? true : false} 
            autoPlaySpeed={3000} 
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {reviewsData.map(item => (
                    <div className={styles.reviews_item}>
                        <div className={styles.reviews_item_top}>
                            <div className={styles.reviews_item_avatar}>
                                <img src={"./img/" + item.img} alt="author" />
                            </div>
                            <div className={styles.reviews_item_title}>
                                <h3 className={styles.reviews_author}>{item.author}</h3>
                                <h4 className={styles.reviews_product}>{item.product}</h4>
                            </div>
                        </div> 
                        <p className={styles.reviews_desc}>{item.desc}</p>
                    </div>
                ))}
            </Carousel>
            </div>
            </section>
        );
    }
}

export default Reviews;