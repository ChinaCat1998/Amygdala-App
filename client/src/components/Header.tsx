/*  */
import logo from '../assets/logo/amygdala_logo-crop.jpg'


const Header = () => {
  return (
    <header>
      <a href="/LoginPage" className="login-link">Login/Logout</a>
      <img src={logo} alt="Amygdala - Healing Starts Here" /> 
    </header>
  );
};

export default Header;