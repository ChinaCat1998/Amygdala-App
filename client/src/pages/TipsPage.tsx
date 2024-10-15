// import React from 'react';
import MentalHealthTips from '../components/Tips';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import Nav from '../components/Nav';
import Nav2 from '../components/Nav2';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

const TipsPage = () => {
  const [loginCheck, setLoginCheck] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = () => {
            if (Auth.loggedIn()) {
                setLoginCheck(true);  // User is logged in
            } else {
                // If not logged in, log out and redirect
                Auth.logout();
                alert(`Not Logged In/Session Expired!\nPlease Log In`);
                navigate('/login');  // Redirect to login page
            }
        };
        checkLogin();
    }, [navigate]);

    if (!loginCheck) {
        return null;  // Render nothing until login check is done
    }

  return (
    <div className="App">
      <Header />
      <Nav2 />
      <MentalHealthTips />
      <Footer />
    </div>
  );
};

export default TipsPage;
