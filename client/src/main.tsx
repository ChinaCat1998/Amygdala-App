import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Home from './pages/Home.tsx';
// import JournalPage from './pages/JournalPage.tsx';
// import ErrorPage from './pages/ErrorPage.tsx';
// import LoginPage from './pages/LoginPage.tsx';
// import SignUpPage from './pages/SignUpPage.tsx';
// import Calandar from './pages/Calendar.tsx';
// import HealthyTips from './pages/HealthyTips.tsx';

// import ErrorPage from './pages/ErrorPage.tsx'
// import TestPage from './pages/testpage.tsx'
import Home from './pages/Home.tsx'
import CalendarPage from './pages/CalendarPage.tsx'
import TipsPage from './pages/TipsPage.tsx'
import JournalPage from './pages/JournalPage.tsx';
import SignupPage from './pages/SignUpPage.tsx';
import LoginPage from './pages/LoginPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/SignUpPage',
        index: true,
        element: <SignupPage />
      },
      {
        path: '/LoginPage',
        index: true,
        element: <LoginPage />
      },
      {
        path: '/Home',
        index: true,
        element: <Home />
      },
      {
        path: '/CalendarPage',
        index: true,
        element: <CalendarPage />,
      },
      {
        path: '/tipspage',
        index: true,
        element: <TipsPage />,
      },
      // placeholder, will replace with route to journalentry
      {
        path: '/JournalPage',
        index: true,
        element: <JournalPage />
      }
    ],
  },
]);
//const App = () => {

//}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
