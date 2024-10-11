import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import Nav from './components/Nav'
import TestPage from './pages/testpage';

import SignUpPage  from './pages/SignUpPage';
import LoginPage from  './pages/LoginPage';
import Footer  from './components/Footer';
// import { Outlet } from 'react-router-dom';
import './App.css';




function App() {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )

}

export default App;



