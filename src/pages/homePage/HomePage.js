import { useSelector } from 'react-redux';
import Aboutus from '../../components/aboutus/Aboutus';
import Advantages from '../../components/advantages/Advantages';
import Header from '../../components/header/Header';
import News from '../../components/news/News';
import Reviews from '../../components/reviews/Reviews';
import Service from '../../components/service/Service';
import GatesTypes from '../../components/gatesTypes/GatesTypes';
import WorksSlider from '../../components/worksSlider/WorksSlider';

const HomePage = () => {

    const { news, gatesTypes, review } = useSelector((state) => state);
    console.log(news)

    return (
        <>
            <Header />
            <Aboutus />
            <GatesTypes gatesTypes={gatesTypes.list} amount={5}/>
            <Advantages />
            <News news={news.list} amount={3}/>
            <WorksSlider />
            <Service />
            <Reviews review={review.list} amount={10}/>
        </>
    );
}

export default HomePage;