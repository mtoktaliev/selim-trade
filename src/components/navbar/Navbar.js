import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

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
                
                <NavLink to='/' className="nav_link hide_active"><img src={logo} alt="logo"></img></NavLink>
                
                <ul className='nav_list' style={hideOrSwow} onClick={handleMenu}>
                    <NavLink to='/' className='nav_link'>Главная</NavLink>
                    <NavLink to='gates' className='nav_link'>Услуги</NavLink>
                    <NavLink to='news' className='nav_link'>Новости</NavLink>
                    <NavLink to='works' className='nav_link'>Наши работы</NavLink>
                    <div className='nav_link_contacts'>
                        <Link className='nav_link' style={{fontSize: '15px'}} to="map" spy={true} smooth={true} offset={50} duration={500} onClick={handleMenu}><CiLocationOn/>&thinsp;г. Бишкек</Link>
                        <NavLink className='nav_link' style={{fontSize: '15px'}} to="tel:+996552570755"><CiPhone/>&thinsp;+996 (552) 57 07 55</NavLink>
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