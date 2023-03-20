import { Link } from "react-router-dom";

import H2 from "../h2/H2";
import './News.css'
import LightBtn from "../lightBtn/LightBtn";

const News = ({news =[], amount}) => {

    const list = news.filter((_, i) => i < amount);

    return ( 
        <section className="news">
            <div className="news_container">
                <H2 data='Последние новости'/>
                    <div className="news_inner">
                        {list.map(({ id, images, title, description }) => (
 /* новости */                  <Link to={`/products/${id}`} key={id}>
                                <div className="news_item" style={{ backgroundImage: `url(${images[0]})`}}>
                                <div className="news_item-title">{title}</div>
                                <div className="news_item-desc">{description}</div>
                                <button className="news_item-btn">УЗНАТЬ БОЛЬШЕ</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <LightBtn name='ВСЕ НОВОСТИ' />
            </div>
        </section>
     );
}
 
export default News;