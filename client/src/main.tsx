import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import Home from './pages/Home.tsx';
// import JournalPage from './pages/JournalPage.tsx';
// import ErrorPage from './pages/ErrorPage.tsx';
// import LoginPage from './pages/LoginPage.tsx';
// import SignUpPage from './pages/SignUpPage.tsx';
// import Calandar from './pages/Calendar.tsx';
// import HealthyTips from './pages/HealthyTips.tsx';

//const App = () => {

//}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
