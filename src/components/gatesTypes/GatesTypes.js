import { NavLink } from "react-router-dom";

import { ROUTES } from '../../utils/Routes'
import H2 from "../h2/H2";
import LightBtn from '../lightBtn/LightBtn';
import './GatesTypes.css'


const GatesTypes = ({gatesTypes = [], amount}) => {

    const list = gatesTypes.filter((_, i) => i < amount);

    return (
        <section className="gatesTypes">
            <div className="gatesTypes_container">
                <H2 data="Мы предлагаем"/>
                    <div className="gatesTypes_inner">
                        {list.map(({ id, header, link }) => (
                            <div className="gatesTypes_item" key={id} style={{backgroundImage: `url(${link})`}}>
                                <NavLink to={`/gates/${id}`}>
                                    <p className="gatesTypes_item-name">{header}</p>
                                </NavLink>
                            </div>
                        ))}
                    </div>
            </div>
        <NavLink to={ROUTES.GATES}><LightBtn name="смотреть все" /></NavLink>
        </section>
    );
}

export default GatesTypes;