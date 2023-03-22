
import './WorksGallery.css'

const WorksGallery = ({worksGallery =[], amount}) => {

    const list = worksGallery.filter((_, i) => i < amount);

    return ( 
        <section className="worksGallery">
            <div className="worksGallery_container">
                <div className="worksGallery_content">
                    <h1 className="worksGallery_title">Наши работы</h1>
                    <div className="worksGallery_desc">Здесь мы собрали наши лучшие проекты, чтобы вы могли вдохновиться идеями для собственного проекта. Вы найдёте проект по душе и нраву, который захотите воплотить в жизнь.</div>
                </div>
                <div className="worksGallery_inner">
                    {list.map(({id, title, images}) => (
                        <div className="worksGallery_img">
                            <img src={images[0]} alt={title} key={id}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default WorksGallery;