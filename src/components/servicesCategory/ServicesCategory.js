import { NavLink } from "react-router-dom";
import PagesHeader from "../pagesHeader/PagesHeader";

import './ServicesCategory.css';

const ServicesCategory = ({gatesTypes = [], amount}) => {

    const list = gatesTypes.filter((_, i) => i < amount);
   
    return (
        <section className='services'>
            <div className="services_container">
                <PagesHeader title='Наши услуги' desc='Наши сотрудники прошли сертифицированные тренинги в Учебных центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны а так же успешно сдали экзамены и являются обладателями сертификатов по направлениям «Воротные системы, ролл ставни, ролл ворота, автоматические системы», «Монтаж автоматики».' />
                <div className="services_inner">
                    {list.map(({ id, type, link }) => (
                        <NavLink to={`/gates/types/${id}`}><div className="services_item" key={id} style={{backgroundImage: `url(${link})`}}>
                            <p className="services_item-name">{type}</p>
                        </div></NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesCategory;