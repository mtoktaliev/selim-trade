import React from 'react';
import './SideNav.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { CiPen } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logout } from '../../../../functions/auth/authSlice';

const SideNav = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout)
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
        navigate('/login')
    }

    return (
        <div className='sideNav_container'>
            <ul className='sideNav_list'>
                <NavLink to='/admin/news' className='sideNav_link'><CiTextAlignLeft/>&thinsp;Новости</NavLink>
                <NavLink to='/admin/orders' className='sideNav_link'><CiMail/>&thinsp;Заявки</NavLink>
                <NavLink to='/admin/reviews' className='sideNav_link'><CiPen/>&thinsp;Отзывы</NavLink>
                <NavLink to='/admin/gates' className='sideNav_link'><CiBoxList/>&thinsp;Виды ворот</NavLink>
                <NavLink to='/admin/done' className='sideNav_link'><CiImageOn/>&thinsp;Наши работы</NavLink>
            </ul>
                <button onClick={logoutHandler} className='button'><CiLogout/>&thinsp;Выход</button>
        </div>
    );
};

export default SideNav;