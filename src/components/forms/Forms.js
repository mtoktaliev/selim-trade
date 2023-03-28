import Btn from '../btn/Btn';
import H2 from '../h2/H2';
import styles from './Forms.module.css'


const Forms = () => {
    return (
        <section className={styles.forms}>
            <div className={styles.forms_container}>
                <H2 data='Остались вопросы?' />
                <form className={styles.forms_inner} id="forms">
                    <label>
                        <div className={styles.form_items}>
                            <input type="text" name='name' placeholder='ИМЯ' />
                            <input type="tel" name='phone' placeholder='телефон' />
                            <textarea placeholder='СООБЩЕНИЕ' className={styles.mobile_holder}></textarea>
                            <Btn name='Оставить заявку' />
                        </div>
                        <textarea placeholder='СООБЩЕНИЕ' className={styles.desktop_holder}></textarea>
                    </label>
                </form>
            </div>
        </section>
    );
};

export default Forms;