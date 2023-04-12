import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getGatesTypes } from '../../functions/gatesTypes/gatesTypesSlice';
import { getNews } from '../../functions/news/newsSlice';
import { getWorksGallery } from '../../functions/worksGallery/worksGallerySlice';
import { getWorksSlider } from '../../functions/worksSlider/worksSliderSlice';
import { getReview } from '../../functions/review/reviewSlice';

import ScrollToTop from '../../utils/scrollToTop';
import Navbar from '../../components/navbar/Navbar';
import BackToTopBtn from '../../components/backToTopBtn/BackToTopBtn';
import Forms from '../../components/forms/Forms';
import Footer from '../../components/footer/Footer';

import HomePage from '../homePage/HomePage';
import GatesPage from '../gatesPage/GatesPage';
import NewsPage from '../newsPage/NewsPage';
import WorksPage from '../worksPage/WorksPage';

import './clientPage.css'
import NewsIdPage from '../newsIdPage/NewsIdPage';
import GatesIdPage from '../gatesIdPage/GatesIdPage';

const ClientPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGatesTypes());
        dispatch(getNews());
        dispatch(getWorksSlider());
        dispatch(getWorksGallery());
        dispatch(getReview());
      }, [dispatch])

    return (
        <div className='clientPage'>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='gates' element={<GatesPage />} />
                <Route path='gates/:id' element={<GatesIdPage />} />
                <Route path='news' element={<NewsPage />} />
                <Route path='news/:id' element={<NewsIdPage />} />
                <Route path='works' element={<WorksPage />} />
            </Routes>
            <BackToTopBtn />
            <Forms />
            <Footer />
        </div>
    );
};

export default ClientPage;