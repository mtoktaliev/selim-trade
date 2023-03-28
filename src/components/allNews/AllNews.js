import { Link } from "react-router-dom";

import styles from './AllNews.module.css'
import LightBtn from "../lightBtn/LightBtn";
import { useState } from "react";
import PagesHeader from "../pagesHeader/PagesHeader";

const AllNews = ({news}) => {

    const [noOfElement, setNoOfElement] = useState(9);

    const loadMore = () => {
        setNoOfElement(noOfElement + 6)
    }

    const slice = news.slice(0, noOfElement)

    return ( 
        <section className={styles.allNews}>
            <div className={styles.allNews_container}>
                <PagesHeader title='Новости компании' desc='К вашему вниманию Здесь мы собрали все актуальные новости нашей компании' />
                <div className={styles.allNews_inner}>
                    {slice.map(({ id, images, title, description }) => (
                        <div className={styles.allNews_item} style={{ backgroundImage: `url(${images[0]})`}}>
                        <div className={styles.allNews_item_title}>{title}</div>
                        <div className={styles.allNews_item_desc}>{description}</div>
                        <Link to={`/products/${id}`} key={id} className={styles.allNews_item_btn}>
                        УЗНАТЬ БОЛЬШЕ
                        </Link>
                        </div>
                    ))}
                </div>
                <LightBtn name='загрузить ещё' click={() => loadMore()} />
            </div>
        </section>
     );
}
 
export default AllNews;