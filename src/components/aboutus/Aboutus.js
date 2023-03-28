import H2 from '../h2/H2';
import styles from './Aboutus.module.css';


const Aboutus = () => {
    return ( 
        <section className={styles.aboutus}>
            <div className={styles.aboutus_container}>
                <H2 data="Кто такие Selim trade?" />
                <div className={styles.aboutus_text}>
                    <p>МЫ являемся официальным представителем DOORHAN.</p>
                    <p>Производственно — монтажная компания Selim trade основана в 2003 году.</p>
                    <p>Основа нашей деятельности — это продажа и монтаж: ворот, рольставней, шлагбаумов, рол штор, жалюзи и многое другое.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Aboutus;

