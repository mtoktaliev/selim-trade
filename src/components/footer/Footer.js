import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/Routes'
import logo from './../../assets/icons/logo-selim-trade-color.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className="footer_container">
                <div className="footer_inner">
                    <div className='footer_menu-links'>
                    <div className="footer_links">
                        <NavLink to={ROUTES.HOME} className='footer_link'><img src={logo} alt='logotype' /></NavLink>
                        <div className="footer_links-social">
                            <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                            <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5 2H10.5C5.80558 2 2 5.80558 2 10.5V25.5C2 30.1944 5.80558 34 10.5 34H25.5C30.1944 34 34 30.1944 34 25.5V10.5C34 5.80558 30.1944 2 25.5 2Z" stroke="url(#paint0_linear_539_72)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.2778 21.1595C24.9559 19.8526 25.2047 18.3652 24.9887 16.9088C24.7684 15.4232 24.0762 14.0478 23.0142 12.9858C21.9522 11.9238 20.5769 11.2316 19.0912 11.0113C17.6348 10.7953 16.1474 11.0441 14.8405 11.7222C13.5336 12.4003 12.4738 13.4733 11.8118 14.7884C11.1499 16.1036 10.9194 17.594 11.1534 19.0476C11.3873 20.5013 12.0736 21.8442 13.1147 22.8853C14.1558 23.9264 15.4987 24.6127 16.9524 24.8467C18.406 25.0806 19.8964 24.8502 21.2116 24.1882C22.5268 23.5262 23.5997 22.4664 24.2778 21.1595Z" stroke="url(#paint1_linear_539_72)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M26.25 9.75H26.2642" stroke="url(#paint2_linear_539_72)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_539_72" x1="3" y1="16.5495" x2="43.2688" y2="16.6374" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#105BFB"/>
                            <stop offset="1" stop-color="#5061FF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_539_72" x1="12.0645" y1="17.3553" x2="28.172" y2="17.3905" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#105BFB"/>
                            <stop offset="1" stop-color="#5061FF"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_539_72" x1="26.25" y1="10.2016" x2="26.269" y2="10.2016" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#105BFB"/>
                            <stop offset="1" stop-color="#5061FF"/>
                            </linearGradient>
                            </defs>
                            </svg></a>
                            <a href="https://web.whatsapp.com/" target='_blank' rel='noreferrer'><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.02931 33.8931L10.4634 31.914L19 34V34.25C19.0001 34.25 19.0002 34.25 19.0002 34.25C28.2367 34.2499 35.75 26.7365 35.75 17.5C35.75 8.26345 28.2365 0.75 19 0.75C9.76345 0.75 2.25 8.26345 2.25 17.5C2.25 20.6131 3.10484 23.6371 4.72773 26.2714C4.40389 27.4088 3.96277 29.0015 3.59697 30.3304C3.40825 31.016 3.23951 31.6315 3.11716 32.0786L2.97172 32.6103L2.93129 32.7582L2.92026 32.7986L2.91721 32.8097L2.91619 32.8134L2.91572 32.8151C2.8738 32.968 2.87389 33.1294 2.91597 33.2823C2.95805 33.4352 3.04057 33.5739 3.15483 33.6839L3.15486 33.6839C3.38714 33.9073 3.72265 33.987 4.02904 33.8932L4.02931 33.8931ZM19 32.4808H18.9998C16.1894 32.4835 13.4352 31.6937 11.0534 30.2019L11.0533 30.2019C10.9457 30.1345 10.8248 30.0911 10.6989 30.0746C10.5729 30.0581 10.445 30.0689 10.3236 30.1063C10.3236 30.1063 10.3236 30.1063 10.3235 30.1063L5.04725 31.7304C5.53606 29.944 6.03276 28.1597 6.53733 26.3776C6.60795 26.1315 6.56796 25.8668 6.42947 25.6524L6.4291 25.6518C4.85251 23.2258 4.01524 20.3937 4.01923 17.5003V17.5C4.01923 9.2402 10.7402 2.51923 19 2.51923C27.2598 2.51923 33.9808 9.2402 33.9808 17.5C33.9808 25.7598 27.2598 32.4808 19 32.4808Z" fill="url(#paint0_linear_539_76)" stroke="url(#paint1_linear_539_76)" stroke-width="0.5"/>
                            <path d="M29.184 20.9863C28.0492 20.3449 27.0828 19.7016 26.3776 19.2323C25.8391 18.8743 25.45 18.6159 25.1647 18.4701C24.3674 18.0652 23.7631 18.3512 23.5331 18.5877C23.5045 18.6168 23.4788 18.6486 23.4563 18.6828C22.6282 19.9475 21.5468 21.1571 21.2302 21.2222C20.8645 21.164 19.1523 20.1734 17.4507 18.731C15.7134 17.2573 14.6203 15.8462 14.4599 14.885C15.5744 13.7173 15.9759 12.9827 15.9759 12.1466C15.9759 11.2849 14.0013 7.68735 13.6441 7.32378C13.2857 6.95957 12.4785 6.90263 11.2447 7.15294C11.1258 7.17744 11.0166 7.23682 10.9305 7.32378C10.7811 7.47584 7.28561 11.1035 8.94669 15.5001C10.7701 20.3255 15.4503 25.9343 21.4171 26.8454C22.0952 26.9487 22.7309 27 23.326 27C26.8362 27 28.908 25.2022 29.4914 21.6359C29.5126 21.5085 29.4944 21.3776 29.4393 21.2613C29.3843 21.1449 29.295 21.0488 29.184 20.9863ZM21.5997 25.6077C15.2898 24.6446 11.3154 18.2811 10.0945 15.0508C8.88337 11.8469 11.1168 8.99021 11.6775 8.34441C12.1336 8.26557 12.6137 8.2324 12.8142 8.26431C13.2328 8.85692 14.6824 11.6447 14.7463 12.1466C14.7463 12.4751 14.6412 12.9326 13.3896 14.2073C13.3324 14.2653 13.287 14.3343 13.2561 14.4102C13.2252 14.4861 13.2093 14.5675 13.2094 14.6497C13.2094 17.9263 19.9989 22.4719 21.2013 22.4719C22.247 22.4719 23.6106 20.6828 24.387 19.517C24.4672 19.5249 24.5448 19.5496 24.6151 19.5896C24.8364 19.7028 25.22 19.9575 25.7051 20.2804C26.3457 20.7066 27.1965 21.2723 28.201 21.8586C27.7449 24.0927 26.4698 26.3523 21.5997 25.6077Z" fill="url(#paint2_linear_539_76)"/>
                            <defs>
                            <linearGradient id="paint0_linear_539_76" x1="2.5" y1="15.9044" x2="46.7956" y2="16.0011" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#105BFB"/>
                            <stop offset="1" stop-color="#5061FF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_539_76" x1="2.5" y1="15.9044" x2="46.7956" y2="16.0011" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#105BFB"/>
                            <stop offset="1" stop-color="#5061FF"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_539_76" x1="8.5" y1="16.033" x2="36.6881" y2="16.0976" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#105BFB"/>
                            <stop offset="1" stop-color="#5061FF"/>
                            </linearGradient>
                            </defs>
                            </svg></a>
                        </div>
                    </div>
                    <ul className="footer_menu">
                        <li><NavLink to={ROUTES.HOME} className='footer_link'>Главная</NavLink></li>
                        <li><NavLink to='/' className='footer_link'>о нас</NavLink></li>
                        <li><NavLink to={ROUTES.SERVICES} className='footer_link'>Услуги</NavLink></li>
                        <li><NavLink to={ROUTES.WORKS} className='footer_link'>Pаботы</NavLink></li>
                        <li><NavLink to='/' className='footer_link'>отзывы</NavLink></li>
                        <li><NavLink to={ROUTES.NEWSPAGE} className='footer_link'>Новости</NavLink></li>
                    </ul>
                    </div>
                    <div className="footer_contacts-map">
                    <div className="footer_info">
                        <div className='footer_schedule'>
                            РЕЖИМ РАБОТЫ<br/>
                            Пн-Пт 8:30–18:30<br/>
                            Суббота 8:30–14:00
                        </div>
                        <div className="footer_phones">
                            тЕЛЕФОН<br/>
                            +996 (552) 57 07 55<br/>
                            +996 (500) 88 80 51<br/>
                            +996 (772) 32 76 76
                        </div>
                    </div>
                    <div className="footer_map" id='map'>
                    <iframe 
                    title={'1'}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.82895671787355!2d74.58702468325248!3d42.848166963734386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d9ff535571%3A0x8bff3ddc6fe576c1!2zMjIg0YPQuy4g0JDQudC90LgsINCR0LjRiNC60LXQuiA3MjAwNDQ!5e0!3m2!1sru!2skg!4v1679291456104!5m2!1sru!2skg" 
                    width="580" 
                    height="260" 
                    style={{ border: 0 }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    />
                    </div>
                </div>
                </div>
                </div>
                <div className="footer_bottom">
                    <p>© 2023 Selim Trade. Данный сайт защищён от копирования. Любая передача данных в интернете запрещена.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;