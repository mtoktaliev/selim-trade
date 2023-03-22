import { useSelector } from 'react-redux';
import Aboutus from '../../components/aboutus/Aboutus';
import Advantages from '../../components/advantages/Advantages';
import Header from '../../components/header/Header';
import News from '../../components/news/News';
import Reviews from '../../components/reviews/Reviews';
import Service from '../../components/service/Service';
import Weoffer from '../../components/weoffer/Weoffer';
import WorksSlider from '../../components/worksSlider/WorksSlider';

const Home = () => {

    const { news, categories } = useSelector((state) => state);

    return (
        <>
            <Header />
            <Aboutus />
            <Weoffer categories={categories.list} amount={6}/>
            <Advantages />
            <News news={news.list} amount={3}/>
            <WorksSlider />
            <Service />
            <Reviews />
        </>
    );
}

export default Home;