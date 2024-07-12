import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import AuthMenu from '../components/includes/AuthMenu';

const AuthRouter = () => {
  return (
    <>
      <AuthMenu/>
        <Routes>
            <Route path="/user/login" element={<Login/>}/>
            <Route path='/join'/>
            <Route path='/update' />
            <Route path='/logout' />
        </Routes>
    </>
  )
}

export default AuthRouter;