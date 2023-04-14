import React, {useEffect, useState} from 'react';
import H2 from '../../../components/h2/H2';
import styles from './AdminReviews.module.css'
import { getGatesTypes } from '../../../functions/gatesTypes/gatesTypesSlice';
import { useDispatch } from 'react-redux';
import { createPostReview } from '../../../functions/postReview/postReviewSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

const AdminReviews = () => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [file, setFile] = useState('')
    // const [gatesId, setGatesId] = useState('')
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(getGatesTypes())
    }, [dispatch])
   
    // const { gatesTypes } = useSelector((state) => state);

    const submitHandler = () => {
        if (!name ) {
            alert("Введите заголовок")
        } else if (!text ) {
            alert("Введите текст")
        } else if (!file) {
            alert("Загрузите фото обложки")
        }  else {
            const data = new FormData()
            data.append('name', name)
            data.append('text', text)
            data.append('file', file)
            // data.append('gates', gatesId)
            dispatch(createPostReview(data))
            navigate('/admin')
            toast('Новость сохранена')

            console.log(data)
        }
    }

    const clearFormHandler = () => {
        setName('')
        setText('')
        setFile('')
    }
    
    return (
        <section className={styles.section}>
         <H2 data="Добавьте вороту" />
        <form
        className={styles.container}
        onSubmit={(e) => e.preventDefault()}
        >
            <label className={styles.textLabel}>
                Имя
                <input 
                type="text" className={styles.title} 
                placeholder='Введите имя' 
                value={name} 
                onChange={e => setName(e.target.value)}
                />
            </label>

            <label className={styles.textLabel}>
                Напишите отзыв
                <textarea 
                type="text" 
                className={styles.text} 
                value={text}
                placeholder='Текст отзыва' 
                onChange={e => setText(e.target.value)}
                maxlength="100"
                />
            </label>
            
            <label>Ворота</label>
            {/* <select onChange={(e) => setGatesId(e.target.value)} className={styles.select}>
                {gatesTypes.list.map((item) =>{
                    return <option>{item.header}</option>
                })}
            </select> */}
            <label className={styles.imgLabel}>
                Прикрепить изображение
                <input 
                type='file' 
                className={styles.imgBtn}
                onChange={(e) => setFile(e.target.files[0])} />
            </label>
            
            <div className={styles.btns}>
                <button className={styles.addBtn} onClick={submitHandler}><CiCircleCheck/>&thinsp;Добавить</button>
                
                <button className={styles.cancelBtn} onClick={clearFormHandler}><CiCircleRemove/>&thinsp;Отменить</button>
            </div>
        </form>
        </section>
        // <>
        // <form
        // className={styles.container}
        // onSubmit={(e) => e.preventDefault()}
        // >
        //     <label className={styles.imgLabel}>
        //         Прикрепить изображение
        //         <input 
        //         type='file' 
        //         className={styles.imgBtn}
        //         onChange={(e) => setMain_photo(e.target.files[0])} />
        //     </label>
        //     <label className={styles.imgLabel}>
        //         Прикрепить изображение
        //         <input 
        //         type='file' 
        //         className={styles.imgBtn}
        //         onChange={(e) => setSecond_photo(e.target.files[0])} />
        //     </label>      
        //     <label className={styles.textLabel}>
        //         Заголовок
        //         <input 
        //         type="text" className={styles.title} 
        //         placeholder='Заголовок (Макс. 100 символов)' 
        //         value={header} 
        //         onChange={e => setHeader(e.target.value)}
        //         maxlength="100"
        //         />
        //     </label>
            
        //     <label className={styles.textLabel}>
        //         Текст
        //         <textarea 
        //         type="text" 
        //         className={styles.text} 
        //         value={description}
        //         placeholder='Текст (Макс. 800 символов)' 
        //         onChange={(e) => setDescription(e.target.value)}
        //         maxlength="500"
        //         />
        //     </label>
            
        //     <div className={styles.btns}>
        //         <button className={styles.addBtn} onClick={submitHandler}><CiCircleCheck/>&thinsp;Добавить</button>
                
        //         <button className={styles.cancelBtn} onClick={clearFormHandler}><CiCircleRemove/>&thinsp;Отменить</button>
        //     </div>
        // </form>
        // </>
    );
};

export default AdminReviews;