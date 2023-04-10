import { NavLink } from "react-router-dom";

import H2 from "../h2/H2";
import LightBtn from '../lightBtn/LightBtn';
import styles from './GatesTypes.module.css'


const GatesTypes = ({gatesTypes = [], amount}) => {

    const list = gatesTypes.filter((_, i) => i < amount);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <H2 data="Мы предлагаем"/>
                    <div className={styles.inner}>
                        {list.map(({ id, header, link }) => (
                            <div className={styles.item} key={id} style={{backgroundImage: `url(http://161.35.29.179:8085/image/${link})`}}>
                                <NavLink to={`/gates/${id}`}>
                                    <p className={styles.item_name}>{header}</p>
                                </NavLink>
                            </div>
                        ))}
                    </div>
            </div>
        <NavLink to='gates'><LightBtn name="смотреть все" /></NavLink>
        </section>
    );
}

export default GatesTypes;