import H2 from '../h2/H2';
import styles from './Advantages.module.css';
import measurements from './../../assets/icons/advantages/our-advantages-take-measurements.svg'
import experience from './../../assets/icons/advantages/our-advantages-experience.svg'
import deadlines from './../../assets/icons/advantages/our-advantages-min-deadlines.svg'
import qualification from './../../assets/icons/advantages/our-advantages-high-qualification.svg'
import guarantee from './../../assets/icons/advantages/our-advantages-guarantee.svg'


const Advantages = () => {

    return ( 
        <div className={styles.advantages}>
            <div className={styles.advantages_container}>
                <H2 data="Наши преимущества" />
                <div className={styles.advantages_inner}>
                    <div className={styles.advantages_item}>
                        <img src={measurements} alt="measurements" className={styles.advantages_item_icon}/>
                        <p className={styles.advantages_desc}>Бесплатный выезд специалиста для замеров</p>
                    </div>
                    <div className={styles.advantages_item}>
                        <img src={experience} alt="experience" className={styles.advantages_item_icon}/>
                        <p className={styles.advantages_desc}>Многолетний опыт работы</p>
                    </div>
                    <div className={styles.advantages_item}>
                        <img src={deadlines} alt="deadlines" className={styles.advantages_item_icon}/>
                        <p className={styles.advantages_desc}>Минимальные сроки производства</p>
                    </div>
                    <div className={styles.advantages_item}>
                        <img src={qualification} alt="qualification" className={styles.advantages_item_icon}/>
                        <p className={styles.advantages_desc}>Высокая квалификация сотрудиков</p>
                    </div>
                    <div className={styles.advantages_item}>
                        <img src={guarantee} alt="guarantee" className={styles.advantages_item_icon}/>
                        <p className={styles.advantages_desc}>Постгарантийное 
                        обслуживание и ремонт</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Advantages;