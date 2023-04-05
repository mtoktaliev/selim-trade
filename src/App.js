import { Route, Routes } from 'react-router-dom';

import ClientPage from './pages/clientPage/clientPage';
import AdminPage from './pages/adminPage/AdminPage';
import LoginPage from './pages/loginPage/LoginPage';

import './../src/styles/main.css';

const App= () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<ClientPage />} />
        <Route path='admin/*' element={<AdminPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
