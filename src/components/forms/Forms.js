import { useState } from 'react';
import Btn from '../btn/Btn';
import H2 from '../h2/H2';
import styles from './Forms.module.css'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../functions/orders/orderSlice';


const Forms = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [contact, setContact] = useState('')

    const dispatch = useDispatch()

    const submitHandler = () => {
        if (!name ) {
            alert("Введите имя")
        } else if (!message ) {
            alert("Введите сообщение")
        } else if (!contact) {
            alert("Введите номер телефона")
        }  else {
            const data = new FormData()
            data.append('name', name)
            data.append('message', message)
            data.append('contact', contact)
            dispatch(createOrder(data))
            toast('Ваша заявка отправлена')
        }
    }
    
    return (
        <section className={styles.forms}>
            <div className={styles.forms_container}>
                <H2 data='Остались вопросы?' />
                <form 
                className={styles.forms_inner} 
                id="forms"
                onSubmit={(e) => e.preventDefault()}
                >
                    <label>
                        <div className={styles.form_items}>
                            <input 
                            type="text" 
                            name='name' 
                            placeholder='Имя' 
                            onChange={e => setName(e.target.value)}
                            />
                            <input 
                            type="tel" 
                            name='phone' 
                            placeholder='Телефон' 
                            onChange={e => setContact(e.target.value)}
                            />
                            <textarea 
                            placeholder='Сообщение' 
                            className={styles.mobile_holder}
                            onChange={(e) => setMessage(e.target.value)}
                            />
                            <button onClick={submitHandler}><Btn name='Оставить заявку' /></button>
                            
                        </div>
                        <textarea 
                        placeholder='Сообщение' 
                        className={styles.desktop_holder}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </form>
            </div>
        </section>
    );
};

export default Forms;