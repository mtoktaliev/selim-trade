import styles from './GatesId.module.css'
import GatesIdTypes from '../gatesIdTypes/GatesIdTypes'
import { useSelector } from 'react-redux';

const GatesId = ({header, description, id, link}) => {
    const {gatesTypes} = useSelector((state)=> state);
    return (
        <section className={styles.section}>
            <div className={styles.bgImg} style={{backgroundImage: `url(http://161.35.29.179:8085/image/${link})`}}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <h2 className={styles.title}>{header}</h2>
                </div>
            </div>
            </div>
            <div className={styles.container}>
                <p className={styles.desc}>{description}</p>
            </div>
            <GatesIdTypes gatesTypes={gatesTypes.list} amount={5} />
        </section>
    );
};

export default GatesId;