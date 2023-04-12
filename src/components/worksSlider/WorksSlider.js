import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './WorksSlider.css';
import H2 from '../h2/H2';

const WorksSlider = () => {

    const { list } = useSelector(({worksSlider}) => worksSlider);

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
          items: 1
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };

    return (
        <section className='worksSlider'>
            <H2 data="Наши работы" />
            <div className="worksSlider_container">
            
            <Carousel 
            responsive={responsive} 
            infinite={true} 
            autoPlay={true} 
            autoPlaySpeed={3000} 
            transitionDuration={500}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {list.map(({id, link}) => (
                    <NavLink to={`/works`}>
                        <div className='worksSlider_item'>
                            <img src={`http://161.35.29.179:8085/image/${link}`} alt={id} />
                        </div>
                    </NavLink>
                ))}
            </Carousel>
            </div>
        </section>
    );
}

export default WorksSlider;