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
          items: 2
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };

    return (
        <div className='worksSlider'>
            <H2 data="Наши работы" />
            <div className="worksSlider_container">
            
            <Carousel responsive={responsive} infinite={true}>
                {list.map(({id, name, image}) => (
                    <NavLink to={`/categories/${id}`}>
                        <div className='worksSlider_item'>
                            <img src={image} alt={name} />
                        </div>
                    </NavLink>
                ))}
            </Carousel>
            </div>
        </div>
    );
}

export default WorksSlider;