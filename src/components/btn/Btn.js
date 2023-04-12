import styles from './Btn.module.css'


const Btn = (props) => {
    return (
        <button className={styles.btn}>{props.icon}{props.name}{props.onClick}</button>
    );
}

export default Btn;