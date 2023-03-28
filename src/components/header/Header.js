import { Link } from 'react-scroll';

// import { ROUTES } from '../../utils/Routes'
import styles from './Header.module.css';
import order from "./../../assets/icons/order-icon.svg";
import Btn from '../btn/Btn';

const Header = () => {
    const img = <img src={order} alt="order-icon"></img>;
    return (
        <section className={styles.header}>
            <div className={styles.header_container}>
                <h1 className={styles.header_title}>Современная и надёжная защита</h1>
                <div className={styles.header_subtitle}>Найдите идеальный вариант сами или предоставьте это нам</div>
                <Link to="forms" spy={true} smooth={true} offset={-150} duration={1000}><Btn icon={img} name="Заказать ворота"/></Link>
            </div>
        </section>
    );
}

export default Header;