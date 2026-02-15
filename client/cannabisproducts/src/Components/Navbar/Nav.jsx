import './Nav.css';
import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { FaShoppingCart } from 'react-icons/fa';

// import UserMenu from '../../Pages/Login/UserMenu';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateUser = () => {
      const locatUser = localStorage.getItem('cannabisuser');
      if (locatUser) {
        setUser(JSON.parse(locatUser).user);
      } else {
        setUser(null);
      }
    };

    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };

    updateUser();
    updateCart();

    window.addEventListener('storage', updateUser);
    window.addEventListener('storage', updateCart);

    return () => {
      window.removeEventListener('storage', updateUser);
      window.removeEventListener('storage', updateCart);
    };
  }, []);

  const onLogin = () => {
    navigate('/login');
  };
  const onLogOut = () => {
    setUser(null);
    localStorage.removeItem('cannabisuser').token;
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B3D2E] text-[#F5F0E8]  px-10 py-4 flex justify-between items-center z-50 shadow-md">
      {' '}
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
        <span className="text-[#C9A84C]">Emerald&nbsp;</span>Marketplace
      </h1>
      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-sm">
        <li className="cursor-pointer hover:text-gray-300">
          <NavLink to="/" className="link">
            HOME
          </NavLink>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <NavLink to="/about-us" className="link">
            ABOUT US
          </NavLink>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <NavLink to="/add-product" className="link">
            ADD NEW PRODUCT
          </NavLink>
        </li>
        <li className="relative cursor-pointer hover:text-gray-300">
          <NavLink to="/shop-cart" className="link flex items-center gap-2">
            <FaShoppingCart size={18} />
            CART
          </NavLink>

          {/* Cart Count Badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          )}
        </li>

        {/* <button
          className="bg-gradient-to-r from-red-500 to-yellow-600 
                   hover:from-red-400 hover:to-pink-500 
                   text-white font-bold py-1 px-3 rounded 
                   focus:outline-none focus:shadow-outline 
                   transition-all duration-300 "
        >
          Login
        </button> */}
        {/* {console.log(user)} */}
        {/* {setUser('hai')} */}
        {/* {console.log(user)} */}

        {user ? (
          <>
            <span className="text-green-400">Hello,{user.name}</span>
            {/* <UserMenu user={user} /> */}
            <Button text="Logout" onClick={onLogOut} />
          </>
        ) : (
          <Button text="Login" onClick={onLogin} />
        )}
      </ul>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          className="text-[#F5F5F5] focus:outline-none text-2xl bg-[#0B3D2E] border-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <i className="fa-solid fa-xmark nav-toggle-icon nav-toggle-icon--open"></i>
          ) : (
            <span className="nav-toggle-icon">☰</span>
          )}
        </button>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#0B3D2E] text-[#F5F5F5] flex flex-col items-center space-y-4 py-6 md:hidden">
          <NavLink
            to="/"
            className="hover:text-gray-300"
            onClick={() => setOpen(!open)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about-us"
            className="hover:text-gray-300"
            onClick={() => setOpen(!open)}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/new-station-register"
            className="hover:text-gray-300"
            onClick={() => setOpen(!open)}
          >
            ADD NEW PRODUCT
          </NavLink>
          {/* <button
            className="bg-gradient-to-r from-red-500 to-yellow-600 
                   hover:from-red-400 hover:to-pink-500 
                   text-white font-bold py-1 px-3 rounded 
                   focus:outline-none focus:shadow-outline 
                   transition-all duration-300 "
          >
            Login
          </button> */}
          {/* <Button text="Login" />
           */}
          {user ? (
            <>
              <span className="text-green-400">Hello,{user.name}</span>
              <Button text="Logout" onClick={onLogOut} />
            </>
          ) : (
            <Button text="Login" onClick={onLogin} />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
