import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './../src/styles/main.css';
import BackToTopBtn from './components/backToTopBtn/BackToTopBtn';
import Footer from './components/footer/Footer';
import Forms from './components/forms/Forms';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './components/routes/AppRoutes';
import { getCategories } from './functions/categories/categoriesSlice';
import { getNews } from './functions/news/newsSlice';
import { getWorksGallery } from './functions/worksGallery/worksGallerySlice';
import { getWorksSlider } from './functions/worksSlider/worksSliderSlice';
import ScrollToTop from './utils/scrollToTop';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getNews());
    dispatch(getWorksSlider());
    dispatch(getWorksGallery());
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
