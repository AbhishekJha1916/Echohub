import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Feed from './components/Feed/Feed';
import LoginPage from './pages/Authentication/Login/Login';
import SignupPage from './pages/Authentication/Signup/Signup';
import PageNotFound from './pages/Error/NotFound';
import Home from './pages/Home/Home';




const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/users/accounts/login' element={<LoginPage />} />
      <Route path='/users/accounts/signup' element={<SignupPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)