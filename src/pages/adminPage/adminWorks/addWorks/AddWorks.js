import React, { useState } from 'react';
import H2 from '../../../../components/h2/H2';
import styles from './AddWorks.module.css'
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createDone } from '../../../../functions/done/doneSlice';

const AddWorks = () => {
    const [link, setLink] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = () => {
        if (!link ) {
            alert("Прикрепите изображение")
        } else {
            const data = new FormData()
            data.append('file', link)
            dispatch(createDone(data))
            navigate('/admin')
            toast('Фото загружено')
        }
    }

    const clearFormHandler = () => {
        setLink('')
    }

    return (
        <section className={styles.section}>
            <H2 data='Добавить фото' />
            <form
            className={styles.container}
            onSubmit={(e) => e.preventDefault()}
        >
            <label className={styles.imgLabel}>
                Прикрепить изображение
                <input 
                type='file' 
                className={styles.imgBtn}
                onChange={(e) => setLink(e.target.files[0])}
                 />
            </label>
            <div className={styles.btns}>
                <button className={styles.addBtn} onClick={submitHandler}><CiCircleCheck/>&thinsp;Добавить</button>
                
                <button className={styles.cancelBtn} onClick={clearFormHandler}><CiCircleRemove/>&thinsp;Отменить</button>
            </div>
        </form>
        </section>
    );
};

export default AddWorks;