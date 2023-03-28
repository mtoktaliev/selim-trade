import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './../src/styles/main.css';
import BackToTopBtn from './components/backToTopBtn/BackToTopBtn';
import Footer from './components/footer/Footer';
import Forms from './components/forms/Forms';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './components/routes/AppRoutes';
import { getGatesTypes } from './functions/gatesTypes/gatesTypesSlice';
import { getNews } from './functions/news/newsSlice';
import { getWorksGallery } from './functions/worksGallery/worksGallerySlice';
import { getWorksSlider } from './functions/worksSlider/worksSliderSlice';
import { getReview } from './functions/review/reviewSlice';
import ScrollToTop from './utils/scrollToTop';

import { getApiResource } from './utils/networks';



const App= () => {
  getApiResource();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGatesTypes());
    dispatch(getNews());
    dispatch(getWorksSlider());
    dispatch(getWorksGallery());
    dispatch(getReview());
  }, [dispatch])

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Forms />
      <BackToTopBtn />
      <Footer />
    </div>
  );
}

export default App;
