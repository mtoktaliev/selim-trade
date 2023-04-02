import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './RegisterPage.module.css'
import { registerUser } from '../../functions/auth/authSlice';

const RegisterPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { status } = useSelector((state) => state.auth)
    console.log(status)

    useEffect(() => {
        if (status) {
            toast(status)
        }
    }, [status])

    const handleSubmit = () => {
        try {
            dispatch(registerUser({username, password}))
            setUsername('')
            setPassword('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className={styles.section}>
            <form onSubmit={e => e.preventDefault()}
            className={styles.form}
            >
                <h2 className={styles.h2}>Регистрация</h2>
                <label className={styles.label}>
                    Логин:
                    <input type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    className={styles.input}
                    />    
                </label>
                <label className={styles.label}>
                    Пароль:
                    <input type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className={styles.input}
                    />    
                </label>
                <div className={styles.buttons}>
                    <button type='submit'
                    onClick={handleSubmit}
                    className={styles.btn}>Подтвердить</button>
                    <Link to='/login' className={styles.register}>Есть аккаунт?</Link>
                </div>
            </form>
        </section>
    );
};

export default RegisterPage;