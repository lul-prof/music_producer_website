import React, { useContext } from 'react'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import UsersPage from './pages/UsersPage/UsersPage'
import BeatsPage from './pages/BeatsPage/BeatsPage'
import BlogsPage from './pages/BlogsPage/BlogsPage'
import MerchandisePage from './pages/MerchandisePage/MerchandisePage'
import SubscribersPage from './pages/SubscribersPage/SubscribersPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { ManagementContext } from './Context/ManagementContext'

const App = () => {
  const {token}=useContext(ManagementContext);
  return (
    <>
    <BrowserRouter>
    {
      token===""  
      ?
      <LoginPage/>
      :
      <>
    <NavbarComponent/>
    <Toaster/>
    <Routes>
      <Route path='/' element={token!==""?< DashboardPage/>:<LoginPage/>}></Route>
      <Route path='/users' element={token!==""?<UsersPage/>:<LoginPage/>}></Route>
      <Route path='/beats' element={token!==""?<BeatsPage/>:<LoginPage/>}></Route>
      <Route path='/blogs' element={token!==""?<BlogsPage/>:<LoginPage/>}></Route>
      <Route path='/merchandise' element={token!==""?<MerchandisePage/>:<LoginPage/>}></Route>
      <Route path='/subscribers' element={token!==""?<SubscribersPage/>:<LoginPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
    </>
    }
    </BrowserRouter>
    </>

  )
}

export default App