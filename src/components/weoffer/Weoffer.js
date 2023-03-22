import { NavLink } from "react-router-dom";

import { ROUTES } from '../../utils/Routes'
import H2 from "../h2/H2";
import LightBtn from '../lightBtn/LightBtn';
import './Weoffer.css'


const Weoffer = ({categories = [], amount}) => {

    const list = categories.filter((_, i) => i < amount);

    return (
        <section className="weoffer">
            <div className="weoffer_container">
                <H2 data="Мы предлагаем"/>
                    <div className="weoffer_inner">
                        {list.map(({ id, name, image }) => (
                            <div className="weoffer_item" key={id} style={{backgroundImage: `url(${image})`}}><NavLink to={`/categories/${id}`}>
                                <p className="weoffer_item-name">{name}</p>
                            </NavLink></div>
                        ))}
                    </div>
            </div>
        <NavLink to={ROUTES.SERVICES}><LightBtn name="смотреть все" /></NavLink>
        </section>
    );
}

export default Weoffer;