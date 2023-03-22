import { NavLink } from "react-router-dom";

import './ServicesCategory.css';

const ServicesCategory = ({categories = [], amount}) => {

    const list = categories.filter((_, i) => i < amount);
   
    return (
        <section className='services'>
            <div className="services_container">
                <div className="services_content">
                    <h1 className="services_title">Наши услуги</h1>
                    <div className="services_desc">Наши сотрудники прошли сертифицированные тренинги в Учебных центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны а так же успешно сдали экзамены и являются обладателями сертификатов по направлениям «Воротные системы, ролл ставни, ролл ворота, автоматические системы», «Монтаж автоматики».</div>
                </div>
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