import H2 from '../h2/H2';
import './Advantages.css';
import measurements from './../../assets/icons/advantages/our-advantages-take-measurements.svg'
import experience from './../../assets/icons/advantages/our-advantages-experience.svg'
import deadlines from './../../assets/icons/advantages/our-advantages-min-deadlines.svg'
import qualification from './../../assets/icons/advantages/our-advantages-high-qualification.svg'
import guarantee from './../../assets/icons/advantages/our-advantages-guarantee.svg'
import { useInView } from 'react-intersection-observer';


const Advantages = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    return ( 
        <section className='advantages'>
            <div ref={ref} className={`advantages_container ${inView ? 'element-animation element-show' : 'element-animation'}`}>
                <H2 data="Наши преимущества" />
                <div className='advantages_inner'>
                    <div className='advantages_item'>
                        <img src={measurements} alt="measurements" className='advantages_item_icon'/>
                        <p className='advantages_desc'>Бесплатный выезд специалиста для замеров</p>
                    </div>
                    <div className='advantages_item'>
                        <img src={experience} alt="experience" className='advantages_item_icon'/>
                        <p className='advantages_desc'>Многолетний опыт работы</p>
                    </div>
                    <div className='advantages_item'>
                        <img src={deadlines} alt="deadlines" className='advantages_item_icon'/>
                        <p className='advantages_desc'>Минимальные сроки производства</p>
                    </div>
                    <div className='advantages_item'>
                        <img src={qualification} alt="qualification" className='advantages_item_icon'/>
                        <p className='advantages_desc'>Высокая квалификация сотрудиков</p>
                    </div>
                    <div className='advantages_item'>
                        <img src={guarantee} alt="guarantee" className='advantages_item_icon'/>
                        <p className='advantages_desc'>Постгарантийное 
                        обслуживание и ремонт</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Advantages;