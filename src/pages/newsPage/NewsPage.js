import { useSelector } from 'react-redux';
import AllNews from '../../components/allNews/AllNews';
import Forms from '../../components/forms/Forms';

const NewsPage = () => {
    const { news } = useSelector((state) => state);
    return (
        <div>
            <AllNews news={news.list} />
            <Forms />
        </div>
    );
}

export default NewsPage;