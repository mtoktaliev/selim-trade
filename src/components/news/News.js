import H2 from "../h2/H2";
import './News.css'
import {newsData} from './data'
import LightBtn from "../lightBtn/LightBtn";

const News = () => {
    return ( 
        <div className="news">
            <div className="news_container">
                <H2 data='Последние новости'/>
                    <div className="news_inner">
                        {newsData.map(item => (
                            <div className="news_item" style={{backgroundImage: `url(${"./img/" + item.img}`}}>
                                <div className="news_item-title">{item.title}</div>
                                <div className="news_item-desc">{item.desc}</div>
                                <button className="news_item-btn">УЗНАТЬ БОЛЬШЕ</button>
                            </div>
                        ))}
                    </div>
                    <LightBtn name='ВСЕ НОВОСТИ' />
            </div>
        </div>
     );
}
 
export default News;