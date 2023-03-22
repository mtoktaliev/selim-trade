import { Link } from "react-router-dom";

import './AllNews.css'
import LightBtn from "../lightBtn/LightBtn";
import { useState } from "react";

const AllNews = ({news}) => {

    const [noOfElement, setNoOfElement] = useState(9);

    const loadMore = () => {
        setNoOfElement(noOfElement + 6)
    }

    const slice = news.slice(0, noOfElement)

    return ( 
        <section className="allNews">
            <div className="allNews_container">
                <div className="allNews_content">
                    <h1 className="allNews_title">Новости компании</h1>
                    <div className="allNews_desc">К вашему вниманию Здесь мы собрали все актуальные новости нашей компании</div>
                </div>
                <div className="allNews_inner">
                    {slice.map(({ id, images, title, description }) => (
/* новости */               <Link to={`/products/${id}`} key={id}>
                            <div className="allNews_item" style={{ backgroundImage: `url(${images[0]})`}}>
                            <div className="allNews_item-title">{title}</div>
                            <div className="allNews_item-desc">{description}</div>
                            <button className="allNews_item-btn">УЗНАТЬ БОЛЬШЕ</button>
                            </div>
                        </Link>
                    ))}
                </div>
                <LightBtn name='загрузить ещё' click={() => loadMore()} />
            </div>
        </section>
     );
}
 
export default AllNews;