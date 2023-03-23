import { NavLink } from "react-router-dom";
import PagesHeader from "../pagesHeader/PagesHeader";

import './ServicesCategory.css';

const ServicesCategory = ({categories = [], amount}) => {

    const list = categories.filter((_, i) => i < amount);
   
    return (
        <section className='services'>
            <div className="services_container">
                <PagesHeader title='Наши услуги' desc='Наши сотрудники прошли сертифицированные тренинги в Учебных центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны а так же успешно сдали экзамены и являются обладателями сертификатов по направлениям «Воротные системы, ролл ставни, ролл ворота, автоматические системы», «Монтаж автоматики».' />
                <div className="services_inner">
                    {list.map(({ id, name, image }) => (
                        <NavLink to={`/categories/${id}`}><div className="services_item" key={id} style={{backgroundImage: `url(${image})`}}>
                            <p className="services_item-name">{name}</p>
                        </div></NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesCategory;