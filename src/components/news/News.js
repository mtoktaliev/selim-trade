import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import H2 from "../h2/H2";
import styles from './News.module.css'
import LightBtn from "../lightBtn/LightBtn";

const News = ({news =[], amount}) => {

    const list = news.filter((_, i) => i < amount);

    return ( 
        <section className={styles.section}>
            <div className={styles.container}>
                <H2 data='Последние новости'/>
                    <div className={styles.inner}>
                        {list.reverse().map(({ id, main_photo, header, description }) => (
                            <div className={styles.item} style={{ backgroundImage: `url(http://161.35.29.179:8085/image/${main_photo})`}}>
                            <div className={styles.item_title}>{header}</div>
                            <div className={styles.item_desc}>{description.slice(0, 100)}</div>
                            <Link to={`/news/${id}`} key={id} className={styles.item_btn}>
                                УЗНАТЬ БОЛЬШЕ
                            </Link>
                            </div>
                        ))}
                    </div>
                    <NavLink to='news'><LightBtn name='ВСЕ НОВОСТИ' /></NavLink>
            </div>
        </section>
     );
}
 
export default News;