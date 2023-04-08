import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CiImageOn } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

import { createPostNews } from '../../../functions/postNews/postNewsSlice';
import styles from './AdminNews.module.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminNews = () => {
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
        <form
        className={styles.container}
        onSubmit={(e) => e.preventDefault()}
        >
            <div className={styles.imgContainer}>
                <div>
                <div className={styles.imgPreview}>
                    {main_photo && <img src={URL.createObjectURL(main_photo)} alt='img' />}</div>
                <label className={styles.imgLabel}>
                    <CiImageOn/>&thinsp;Прикрепить изображение
                    <input 
                    type='file' 
                    className={styles.imgBtn}
                    onChange={(e) => setMain_photo(e.target.files[0])} />
                </label>
                </div>
                
                <div>
                <div className={styles.imgPreview}>
                    {second_photo && <img src={URL.createObjectURL(second_photo)} alt='img' />}</div>
                <label className={styles.imgLabel}>
                    <CiImageOn/>&thinsp;Прикрепить изображение
                    <input 
                    type='file' 
                    className={styles.imgBtn}
                    onChange={(e) => setSecond_photo(e.target.files[0])} />
                </label>
                </div>
            </div>

            <div className={styles.textContainer}>       
            <label className={styles.textLabel}>
                Заголовок
                <textarea 
                type="text" className={styles.title} 
                placeholder='Заголовок' 
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
                placeholder='Текст' 
                onChange={(e) => setDescription(e.target.value)}
                maxlength="400"
                />
            </label>
            </div>
            
            <div className={styles.btns}>
                <button className={styles.addBtn} onClick={submitHandler}><CiCircleCheck/>&thinsp;Добавить</button>
                
                <button className={styles.cancelBtn} onClick={clearFormHandler}><CiCircleRemove/>&thinsp;Отменить</button>
            </div>
        </form>
    );
};

export default AdminNews;