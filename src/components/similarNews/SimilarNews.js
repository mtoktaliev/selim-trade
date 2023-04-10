import React from 'react';
import styles from './SimilarNews.module.css'
import H2 from '../h2/H2';

const SimilarNews = ({news =[], amount}) => {
    const list = news.filter((_, i) => i < amount);
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <H2 data='Похожие новости'/>
                    <div className={styles.inner}>
                        {list.map(({ id, main_photo, header, description }) => (
                            <div className={styles.item} style={{ backgroundImage: `url(http://161.35.29.179:8085/image/${main_photo})`}}>
                            <div className={styles.item_title}>{header}</div>
                            <div className={styles.item_desc}>{description.slice(0, 100)}</div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
};

export default SimilarNews;