import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { ROUTES } from '../../utils/Routes'
import H2 from "../h2/H2";
import styles from './News.module.css'
import LightBtn from "../lightBtn/LightBtn";

const News = ({news =[], amount}) => {

    const list = news.filter((_, i) => i < amount);

    return ( 
        <section className={styles.news}>
            <div className={styles.news_container}>
                <H2 data='Последние новости'/>
                    <div className={styles.news_inner}>
                        {list.map(({ id, images, title, description }) => (
                            <div className={styles.news_item} style={{ backgroundImage: `url(${images[0]})`}}>
                            <div className={styles.news_item_title}>{title}</div>
                            <div className={styles.news_item_desc}>{description}</div>
                            <Link to={`/news`} key={id} className={styles.news_item_btn}>
                                УЗНАТЬ БОЛЬШЕ
                            </Link>
                            </div>
                        ))}
                    </div>
                    <NavLink to={ROUTES.NEWSPAGE}><LightBtn name='ВСЕ НОВОСТИ' /></NavLink>
            </div>
        </section>
     );
}
 
export default News;