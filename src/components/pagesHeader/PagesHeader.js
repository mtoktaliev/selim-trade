import styles from './PagesHeader.module.css'

const PagesHeader = (props) => {
    return (
        <div className={styles.pagesHeader}>
            <h2 className={styles.pagesHeader_title}>{props.title}</h2>
            <div className={styles.pagesHeader_desc}>{props.desc}</div>
        </div>
    );
};

export default PagesHeader;