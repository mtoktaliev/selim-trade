import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './../src/styles/main.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './components/routes/AppRoutes';
import { getCategories } from './functions/categories/categoriesSlice';
import { getNews } from './functions/news/newsSlice';
import { getWorksSlider } from './functions/worksSlider/worksSliderSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getNews());
    dispatch(getWorksSlider());
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
