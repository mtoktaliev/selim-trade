import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/Routes'
import "./Navbar.css";
import logo from "./../../assets/icons/logo-selim-trade.png"
import toggleLogo from "./../../assets/icons/logo-selim-trade-toggle.png"
import phone from "./../../assets/icons/phone-icon.svg"
import { useEffect, useState } from "react";

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const activeLink = 'nav_list-link nav_list-link--active';
    const normalLink = 'nav_list-link';

    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 100);
         });
         }, []);

        function bd() {
        document.body.classList.toggle('body_hidden')
        }

        return (
            <nav className="nav">
            <div className={scroll ? 'nav_container nav_container-bg' : 'nav_container'}>
                
                <NavLink to={ROUTES.HOME} className="nav_logo"><img src={logo} alt="logo"></img></NavLink>

            <ul className={`nav_list ${isOpen && "open"}`}>
                    <li className="nav_list-item">
                        <NavLink to={ROUTES.HOME} className="nav_list-link toggle_logo"><img src={toggleLogo} alt="toggle-logo"></img></NavLink>
                    </li>
                    <li className="nav_list-item">
                        <NavLink to={ROUTES.HOME} className={({isActive}) =>  isActive ? activeLink : normalLink} onClick={() => {setIsOpen(!isOpen); bd()}}>Главная</NavLink>
                    </li>
                    <li className="nav_list-item">
                        <NavLink to={ROUTES.SERVICES} className={({isActive}) =>  isActive ? activeLink : normalLink} onClick={() => {setIsOpen(!isOpen); bd()}}>Услуги</NavLink>
                    </li>
                    <li className="nav_list-item">
                        <NavLink to={ROUTES.NEWSPAGE} className={({isActive}) =>  isActive ? activeLink : normalLink} onClick={() => {setIsOpen(!isOpen); bd()}}>Новости</NavLink>
                    </li>
                    <li className="nav_list-item">
                        <NavLink to={ROUTES.WORKS} className={({isActive}) =>  isActive ? activeLink : normalLink} onClick={() => {setIsOpen(!isOpen); bd()}}>Наши работы</NavLink>
                    </li>
                    <li className="nav_list-item">
                        <a href="tel:+996552570755" className="nav_list-link phone_icon" onClick={() => {setIsOpen(!isOpen); bd()}}>г. Бишкек<br/><span><img src={phone} alt="phone-icon"></img>+996 (552) 57 07 55</span></a>
                    </li>
                </ul>

                <a href="tel:+996552570755" className="nav_contacts">г. Бишкек<br/>+996 (552) 57 07 55</a>

                <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => {setIsOpen(!isOpen); bd()}}>
                    <div className="bar"></div>
                </div>

            </div>
        </nav>
        );
}

export default Navbar;