import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

import { createPostNews } from '../../../../functions/postNews/postNewsSlice';
import styles from './AddNews.module.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import H2 from '../../../../components/h2/H2';

const AddNews = () => {
    const [header, setHeader] = useState('')
    const [description, setDescription] = useState('')
    const [main_photo, setMain_photo] = useState('')
    const [second_photo, setSecond_photo] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const submitHandler = () => {
        if (!header ) {
            alert("Введите заголовок")
        } else if (!description ) {
            alert("Введите текст")
        } else if (!main_photo) {
            alert("Загрузите фото обложки")
        } else if (!second_photo) {
            alert("Загрузите фото для текста")
        } else {
            const data = new FormData()
            data.append('header', header)
            data.append('description', description)
            data.append('file1', main_photo)
            data.append('file2', second_photo)
            dispatch(createPostNews(data))
            navigate('/admin')
            toast('Новость сохранена')
        }
    }

    const clearFormHandler = () => {
        setHeader('')
        setDescription('')
    }
    return (
        <>
        <section className={styles.section}>
        <H2 data="Добавьте новость" />
        <form
        className={styles.container}
        onSubmit={(e) => e.preventDefault()}
        >
            <label className={styles.imgLabel}>
                Прикрепить изображение
                <input 
                type='file' 
                className={styles.imgBtn}
                onChange={(e) => setMain_photo(e.target.files[0])} />
            </label>
            <label className={styles.imgLabel}>
                Прикрепить изображение
                <input 
                type='file' 
                className={styles.imgBtn}
                onChange={(e) => setSecond_photo(e.target.files[0])} />
            </label>      
            <label className={styles.textLabel}>
                Заголовок
                <input 
                type="text" className={styles.title} 
                placeholder='Заголовок (Макс. 100 символов)' 
                value={header} 
                onChange={e => setHeader(e.target.value)}
                maxlength="100"
                />
            </label>
            
            <label className={styles.textLabel}>
                Текст
                <textarea 
                type="text" 
                className={styles.text} 
                value={description}
                placeholder='Текст (Макс. 800 символов)' 
                onChange={(e) => setDescription(e.target.value)}
                maxlength="500"
                />
            </label>
            
            <div className={styles.btns}>
                <button className={styles.addBtn} onClick={submitHandler}><CiCircleCheck/>&thinsp;Добавить</button>
                
                <button className={styles.cancelBtn} onClick={clearFormHandler}><CiCircleRemove/>&thinsp;Отменить</button>
            </div>
        </form>
        </section>
        </>
    );
};

export default AddNews;