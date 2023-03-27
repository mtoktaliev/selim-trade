import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { ROUTES } from '../../utils/Routes'
import "./Navbar.css";
import logo from "./../../assets/icons/logo-selim-trade.png"
import { useState } from "react";

const Navbar = () => {

    // useEffect(() => {
    // window.addEventListener("scroll", () => {
    //     setScroll(window.scrollY > 100);
    //      });
    //      }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [hideOrSwow, setHideOrShow] = useState({});

    const handleMenu = () => {
        setIsOpen((prev) => !prev)
        if(isOpen) {
            document.body.classList.remove('body_hidden')
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                document.body.classList.add('body_hidden')
                return {transform: 'translateX(0)'}
            })
        }
    }
        return (
            <nav className="nav">
                <div className='nav_container'>
                   
                    <NavLink to={ROUTES.HOME} className="nav_link hide_active"><img src={logo} alt="logo"></img></NavLink>
                    
                    <ul className='nav_list' style={hideOrSwow} onClick={handleMenu}>
                        <NavLink to={ROUTES.HOME} className='nav_link'>Главная</NavLink>
                        <NavLink to={ROUTES.SERVICES} className='nav_link'>Услуги</NavLink>
                        <NavLink to={ROUTES.NEWSPAGE} className='nav_link'>Новости</NavLink>
                        <NavLink to={ROUTES.WORKS} className='nav_link'>Наши работы</NavLink>
                        <NavLink to={ROUTES.ADMIN} className='nav_link'>Админ</NavLink>
                        <div className="contacts">
                            <Link className='nav_link' to="map" spy={true} smooth={true} offset={50} duration={500} onClick={handleMenu}>г. Бишкек</Link>
                            <NavLink className='nav_link' to="tel:+996552570755"><br/>+996 (552) 57 07 55</NavLink>
                        </div>
                    
                    </ul>
                    
                    
                    {isOpen ? <div className='nav_toggle open'onClick={handleMenu}>
                        <div className="bar"></div>
                    </div> : <div className='nav_toggle'onClick={handleMenu}>
                        <div className="bar"></div>
                    </div>}
               
                </div>
            </nav>
        );
}

export default Navbar;