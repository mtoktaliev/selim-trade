import { Link } from "react-router-dom";

import './AllNews.css'
import LightBtn from "../lightBtn/LightBtn";
import { useState } from "react";
import PagesHeader from "../pagesHeader/PagesHeader";

const AllNews = ({news}) => {

    const [noOfElement, setNoOfElement] = useState(9);

    const loadMore = () => {
        setNoOfElement(noOfElement + 6)
    }

    const slice = news.slice(0, noOfElement)

    return ( 
        <section className="allNews">
            <div className="allNews_container">
                <PagesHeader title='Новости компании' desc='К вашему вниманию Здесь мы собрали все актуальные новости нашей компании' />
                <div className="allNews_inner">
                    {slice.map(({ id, images, title, description }) => (
                        <div className="allNews_item" style={{ backgroundImage: `url(${images[0]})`}}>
                        <div className="allNews_item-title">{title}</div>
                        <div className="allNews_item-desc">{description}</div>
                        <Link to={`/products/${id}`} key={id} className="allNews_item-btn">
                        УЗНАТЬ БОЛЬШЕ
                        </Link>
                        </div>
                    ))}
                </div>
                <LightBtn name='загрузить ещё' click={() => loadMore()} />
            </div>
        </section>
     );
}
 
export default AllNews;