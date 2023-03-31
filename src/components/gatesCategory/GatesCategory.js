import { NavLink } from "react-router-dom";
import PagesHeader from "../pagesHeader/PagesHeader";

import styles from './GatesCategory.module.css';

const GatesCategory = ({gatesTypes = [], amount}) => {

    const list = gatesTypes.filter((_, i) => i < amount);
   
    return (
        <section className={styles.gates}>
            <div className={styles.gates_container}>
                <PagesHeader title='Наши услуги' desc='Наши сотрудники прошли сертифицированные тренинги в Учебных центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны а так же успешно сдали экзамены и являются обладателями сертификатов по направлениям «Воротные системы, ролл ставни, ролл ворота, автоматические системы», «Монтаж автоматики».' />
                <div className={styles.gates_inner}>
                    {list.map(({ id, header, link }) => (
                        <div className={styles.gates_item} key={id} style={{backgroundImage: `url(${link})`}}>
                            <NavLink to={`/gates/${id}`}>
                                <p className={styles.gates_item_name}>{header}</p>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GatesCategory;