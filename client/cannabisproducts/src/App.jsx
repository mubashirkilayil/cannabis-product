import React from 'react';
import Navbar from './Components/Navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home';
import Addproduct from './pages/AddProduct/AddProduct';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import ProductDetailed from './pages/ProductDetailed/ProductDetailed';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Cart from './pages/Cart/Cart';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import AboutUs from './pages/AboutUs/AboutUs';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/add-product" element={<Addproduct />} />
          <Route path="/edit-product/:id" element={<Addproduct />} />
          <Route path="/detailed-product/:id" element={<ProductDetailed />} />
          <Route path="/shop-cart" element={<Cart />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
