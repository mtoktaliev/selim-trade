import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPostNews } from '../../../functions/postNews/postNewsSlice';

const AdminNews = () => {
    const [header, setHeader] = useState('')
    const [description, setDescription] = useState('')
    const [main_photo, setMain_photo] = useState('')
    const [second_photo, setSecond_photo] = useState('')

    const dispatch = useDispatch()
    
    const submitHandler = () => {
        try {
            const data = new FormData()
            data.append('header', header)
            data.append('description', description)
            data.append('file1', main_photo)
            data.append('file2', second_photo)
            dispatch(createPostNews(data))
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <form
        className=''
        onSubmit={(e) => e.preventDefault()}
        >
            <label className=''>
                Прикрепить изображение
                <input type='file' className=''onChange={(e) => setMain_photo(e.target.files[0])} />
            </label>
            <div className=''>IMAGE</div>
            <label className=''>
                Прикрепить изображение
                <input type='file' className=''onChange={(e) => setSecond_photo(e.target.files[0])} />
            </label>
            <div className=''>IMAGE</div>
        <br/>
        <br/>
            <label className=''>
                Заголовок
                <input type="text" className='' placeholder='Заголовок' value={header} onChange={e => setHeader(e.target.value)}/>
            </label>
        <br/>
        <br/>
            <label className=''>
                Текст
                <textarea type="text" className='' placeholder='Текст' onChange={(e) => setDescription(e.target.value)}/>
            </label>
        <br/>
        <br/>
            <div className=''>
                <button className='' onClick={submitHandler}>Добавить</button>
                <button className=''>Отменить</button>
            </div>
        </form>
    );
};

export default AdminNews;