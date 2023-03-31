
import PagesHeader from '../pagesHeader/PagesHeader';
import './WorksGallery.css'

const WorksGallery = ({worksGallery =[], amount}) => {

    const list = worksGallery.filter((_, i) => i < amount);

    return ( 
        <section className="worksGallery">
            <div className="worksGallery_container">
                <PagesHeader title='Наши работы' desc='Здесь мы собрали наши лучшие проекты, чтобы вы могли вдохновиться идеями для собственного проекта. Вы найдёте проект по душе и нраву, который захотите воплотить в жизнь.' />
                <div className="worksGallery_inner">
                    {list.map(({id, link}) => (
                        <div className="worksGallery_img">
                            <img src={link} alt={id} key={id}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default WorksGallery;