import React from 'react';
import './SideNav.css'
import { NavLink } from 'react-router-dom';
import { CiPen } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const SideNav = () => {
    return (
        <div className='sideNav_container'>
            <ul className='sideNav_list'>
                <NavLink to='/admin/news' className='sideNav_link'><CiTextAlignLeft/>&thinsp;Новости</NavLink>
                <NavLink to='/admin/orders' className='sideNav_link'><CiMail/>&thinsp;Заявки</NavLink>
                <NavLink to='/admin/reviews' className='sideNav_link'><CiPen/>&thinsp;Отзывы</NavLink>
            </ul>
                <NavLink to='' className='sideNav_link'><CiLogout/>&thinsp;Выход</NavLink>
        </div>
    );
};

export default SideNav;