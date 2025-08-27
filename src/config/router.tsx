import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer'; // 👈 футер

const AppRouter: React.FC = () => {
  const location = useLocation(); 

  const noHeaderFooterRoutes = ['/login', '/signup'];
  const isLayoutVisible = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div>
      {isLayoutVisible && <Header />} 
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {isLayoutVisible && <Footer />}
    </div>
  );
};

export default AppRouter;
