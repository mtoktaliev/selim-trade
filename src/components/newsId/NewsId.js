import React from 'react';
import styles from './NewsId.module.css'

const NewsId = ({header, description, main_photo, second_photo, id}) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.main_photo}>
                        <img src={`http://161.35.29.179:8085/image/${main_photo}`} alt={id} />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{header}</h2>
                        <p className={styles.desc}>{description}</p>
                        <div className={styles.second_photo}>
                            <img src={`http://161.35.29.179:8085/image/${second_photo}`} alt={id} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsId;