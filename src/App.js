import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ClientPage from './pages/clientPage/clientPage';
import AdminPage from './pages/adminPage/AdminPage';
import LoginPage from './pages/loginPage/LoginPage';
import { PrivatAuth } from './pages/adminPage/adminComponents/sideNav/hoc/PrivatAuth';

import './../src/styles/main.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from './functions/auth/authSlice';

const App= () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginUser())
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<ClientPage />} />
        <Route path='admin/*' element={
        <PrivatAuth>
          <AdminPage />
        </PrivatAuth>
        } />
        <Route path='login' element={<LoginPage />} />
      </Routes>
            <ToastContainer position='bottom-right' />
    </div>
  );
}

export default App;
