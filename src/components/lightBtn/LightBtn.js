import styles from './LightBtn.module.css'

const LightBtn = (props) => {
    return (
        <button className={styles.light_btn} onClick={props.click}>{props.name}</button>   
    );
}

export default LightBtn;