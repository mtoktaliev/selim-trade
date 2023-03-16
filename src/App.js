import './../src/styles/main.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './components/routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
