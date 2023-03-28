import styles from './Btn.module.css'


const Btn = (props) => {
    return (
        <button className={styles.btn}>{props.icon}{props.name}</button>
    );
}

export default Btn;