import { useSelector } from 'react-redux';
import AllNews from '../../components/allNews/AllNews';

const NewsPage = () => {
    const { news } = useSelector((state) => state);
    return (
        <div>
            <AllNews news={news.list} />
        </div>
    );
}

export default NewsPage;