import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { loginUser } from '../../functions/auth/authSlice';
import styles from './Login.module.css'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { status } = useSelector((state) => state.auth)
    // const navigate = useNavigate()

    useEffect(() => {
        if (status) {
            toast(status)
        }
    }, [status])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({username, password}))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className={styles.section}>
            <form onSubmit={e => e.preventDefault()}
            className={styles.form}
            >
                <h2 className={styles.h2}>Авторизация</h2>
                <label className={styles.label}>
                    Логин:
                    <input type='text'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    className={styles.input}
                    />    
                </label>
                <label className={styles.label}>
                    Пароль:
                    <input type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className={styles.input}
                    />    
                </label>
                <div className={styles.buttons}>
                    <button type='submit'
                    onClick={handleSubmit}
                    className={styles.btn}>Войти</button>
                    <Link to='/register' className={styles.register}>Нет аккаунта?</Link>
                </div>
            </form>
        </section>
    );
};

export default LoginPage;