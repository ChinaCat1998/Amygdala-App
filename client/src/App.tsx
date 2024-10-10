/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import {Outlet} from "react-router-dom"
import './App.css'
/* import Nav from './components/Nav'
import TestPage from './pages/testpage'; */
import JournalPage from "./pages/JournalPage";

function App() {

  return (
    <>
      {/* <Nav/> */}
      <main>
        <Outlet />
      </main>
      {/* <TestPage /> */}
      <JournalPage />
    </>
  )
}

export default App


