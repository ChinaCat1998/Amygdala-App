/*  */
import logo from '../assets/logo/amygdala_logo-crop.jpg'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import Logout from "../assets/icons/logout.png"

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    console.log('User logged out');
    navigate('/LoginPage'); // Redirect to login page
  };
  return (
    <header>
      <button className="logoutButton" onClick={handleLogout}><img className='logoutPicture' src={Logout} alt="logout" /></button>
      <a href="/Home"><img className='headerLogo' src={logo} alt="Amygdala - Healing Starts Here" /></a>
    </header>
  );
};

export default Header;