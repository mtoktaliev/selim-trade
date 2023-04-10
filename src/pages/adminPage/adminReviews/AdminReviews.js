import React from 'react';
import H2 from '../../../components/h2/H2';
import styles from './AdminReviews.module.css'

const AdminReviews = () => {
    // const [name, setName] = useState('')
    // const [description, setDescription] = useState('')
    // const [link, setLink] = useState('')
    return (
        // <>
        <H2 data="Добавьте новость" />
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