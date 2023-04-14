import H2 from '../h2/H2';
import './Aboutus.css';
import { useInView } from 'react-intersection-observer';


const Aboutus = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

       
    return ( 
        <section className='aboutus'>
            <div ref={ref} className={`aboutus_container ${inView ? 'element-animation element-show' : 'element-animation'}`}>
                <H2 data="Кто такие Selim trade?" />
                <div className='aboutus_text'>
                    <p>МЫ являемся официальным представителем DOORHAN.</p>
                    <p>Производственно — монтажная компания Selim trade основана в 2003 году.</p>
                    <p>Основа нашей деятельности — это продажа и монтаж: ворот, рольставней, шлагбаумов, рол штор, жалюзи и многое другое.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Aboutus;

