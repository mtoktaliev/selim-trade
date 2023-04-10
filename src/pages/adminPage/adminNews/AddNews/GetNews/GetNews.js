import React from 'react';
import styles from './GetNews.module.css'
import H2 from '../../../../../components/h2/H2';


const GetNews = () => {


    return (
        <section className={styles.section}>
        <H2 data="Все новости" />
        {/* {news.map(({id, header, description}) => (
           
           <div className={styles.container}>
                <div className={styles.id}>{id}</div>
                <div className={styles.header}>{header}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.edit}><button className={styles.editBtn}>Редактировать</button></div>
                <div className={styles.delete}>
                    <button onClick={removeNewsHandler} className={styles.deleteBtn}>Удалить</button>
                    </div>
           </div>
        ))} */}
        </section>
    );
};

export default GetNews;