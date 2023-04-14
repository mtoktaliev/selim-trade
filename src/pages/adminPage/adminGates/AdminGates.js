import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { toast } from 'react-toastify';
import styles from './AdminGates.module.css'
import { createPostGates } from '../../../functions/postGates/postGatesSlice';
import H2 from '../../../components/h2/H2';

const AdminGates = () => {
    const [header, setHeader] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = () => {
        if (!header ) {
            alert("Введите заголовок")
        } else if (!description ) {
            alert("Введите текст")
        } else if (!link) {
            alert("Загрузите фото обложки")
        }  else {
            const data = new FormData()
            data.append('header', header)
            data.append('description', description)
            data.append('file', link)
            dispatch(createPostGates(data))
            navigate('/admin')
            toast('Данные сохранены')
        }
    }

    const clearFormHandler = () => {
        setHeader('')
        setDescription('')
    }

    return (
        <>
        <H2 data='Ворота' />
        <form
        className={styles.container}
        onSubmit={(e) => e.preventDefault()}
        >
            <div>
            <label className={styles.imgLabel}>
                Прикрепить изображение
                <input 
                type='file' 
                className={styles.imgBtn}
                onChange={(e) => setLink(e.target.files[0])} />
            </label>
            </div>

            <label className={styles.textLabel}>
                Заголовок
                <input 
                type="text" className={styles.title} 
                placeholder='Заголовок' 
                value={header} 
                onChange={e => setHeader(e.target.value)}
                maxlength="30"
                />
            </label>
            
            <label className={styles.textLabel}>
                Текст
                <textarea 
                type="text" 
                className={styles.text} 
                value={description}
                placeholder='Текст' 
                onChange={(e) => setDescription(e.target.value)}
                maxlength="800"
                />
            </label>
            
            <div className={styles.btns}>
                <button className={styles.addBtn} onClick={submitHandler}><CiCircleCheck/>&thinsp;Добавить</button>
                
                <button className={styles.cancelBtn} onClick={clearFormHandler}><CiCircleRemove/>&thinsp;Отменить</button>
            </div>
        </form>
        </>
    );
};

export default AdminGates;