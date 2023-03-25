import { Link } from 'react-scroll';

// import { ROUTES } from '../../utils/Routes'
import './Header.css';
import order from "./../../assets/icons/order-icon.svg";
import Btn from '../btn/Btn';

const Header = () => {
    const img = <img src={order} alt="order-icon"></img>;
    return (
        <section className="header">
            <div className='header_container'>
                <h1 className='header_title'>Современная и надёжная защита</h1>
                <div className='header_subtitle'>Найдите идеальный вариант сами или предоставьте это нам</div>
                <Link to="forms" spy={true} smooth={true} offset={-150} duration={1000}><Btn icon={img} name="Заказать ворота"/></Link>
            </div>
        </section>
    );
}

export default Header;