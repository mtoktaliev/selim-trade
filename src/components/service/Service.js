import H2 from '../h2/H2';
import styles from './Service.module.css';
import consult from './../../assets/icons/service/service-consult-icon.svg'
import controller from './../../assets/icons/service/service-controller-icon.svg'
import installation from './../../assets/icons/service/service-installation-icon.svg'
import postguarantee from './../../assets/icons/service/service-postguarantee-icon.svg'

const Service = () => {

    return ( 
        <div className={styles.service}>
            <div className={styles.service_container}>
                <H2 data="Сервис" />
                <div className={styles.service_inner}>
                    <div className={styles.service_item}>
                        <img src={consult} alt="measurements" className={styles.service_item_icon}/>
                        <p className={styles.service_desc}>Консультация и техническая поддержка</p>
                    </div>
                    <div className={styles.service_item}>
                        <img src={controller} alt="experience" className={styles.service_item_icon}/>
                        <p className={styles.service_desc}>Настройка пультов управления</p>
                    </div>
                    <div className={styles.service_item}>
                        <img src={installation} alt="deadlines" className={styles.service_item_icon}/>
                        <p className={styles.service_desc}>Монтаж</p>
                    </div>
                    <div className={styles.service_item}>
                        <img src={postguarantee} alt="qualification" className={styles.service_item_icon}/>
                        <p className={styles.service_desc}>Послегарантийное обслуживание</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Service;