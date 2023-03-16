import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/Routes'
import './Header.css';
import order from "./../../assets/icons/order-icon.svg";
import Btn from '../btn/Btn';

class Header extends Component {
    render() {
        const img = <img src={order} alt="order-icon"></img>;
        return (
            <div className="header">
                <div className='header_container'>
                    <h1 className='header_title'>Современная и надёжная защита</h1>
                    <div className='header_subtitle'>Найдите идеальный вариант сами или предоставьте это нам</div>
                    <Link to={ROUTES.HOME}><Btn icon={img} name="Заказать ворота"/></Link>
                </div>
            </div>
        );
    }
}

export default Header;