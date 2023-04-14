import H2 from '../h2/H2';
import './Service.css';
import consult from './../../assets/icons/service/service-consult-icon.svg'
import controller from './../../assets/icons/service/service-controller-icon.svg'
import installation from './../../assets/icons/service/service-installation-icon.svg'
import postguarantee from './../../assets/icons/service/service-postguarantee-icon.svg'
import { useInView } from 'react-intersection-observer';

const Service = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    return ( 
        <section className='service'>
            <div ref={ref} className={`service_container ${inView ? 'element-animation element-show' : 'element-animation'}`}>
                <H2 data="Сервис" />
                <div className='service_inner'>
                    <div className='service_item'>
                        <img src={consult} alt="measurements" className='service_item_icon'/>
                        <p className='service_desc'>Консультация и техническая поддержка</p>
                    </div>
                    <div className='service_item'>
                        <img src={controller} alt="experience" className='service_item_icon'/>
                        <p className='service_desc'>Настройка пультов управления</p>
                    </div>
                    <div className='service_item'>
                        <img src={installation} alt="deadlines" className='service_item_icon'/>
                        <p className='service_desc'>Монтаж</p>
                    </div>
                    <div className='service_item'>
                        <img src={postguarantee} alt="qualification" className='service_item_icon'/>
                        <p className='service_desc'>Послегарантийное обслуживание</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Service;