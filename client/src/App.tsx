import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavMenu from './components/Nav'
import TestPage from './pages/testpage';
// import Home from './pages/Home';
import SignUpPage  from './pages/SignUpPage';
import LoginPage from  './pages/LoginPage';
import Footer  from './components/Footer';
import './App.css';




function App() {

  return (
    <Router>
      <NavMenu/>
      <Routes>
      <Route path='/' element={<TestPage/>} />
      <Route path='/SignUpPage' element={<SignUpPage />} />
      <Route path='/LoginPage' element={<LoginPage />} />
      </Routes>
      
   <Footer/>
    </Router>
  );
}

export default App;



