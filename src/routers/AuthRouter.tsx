import React from 'react'
import { Route, Routes} from 'react-router-dom';
import AuthMenu from '../components/layouts/AuthMenu';
import Login from '../pages/user/Login';
import Join from '../pages/user/Join';
import JoinSuccess from '../pages/user/JoinSuccess';

const AuthRouter = () => {
  return (
    <>
      <AuthMenu/>
        <Routes>
            <Route path="/user/login" element={<Login/>}/>
            <Route path="/user/join" element={<Join/>}/>
            <Route path='/user/joinsuccess' element={<JoinSuccess/>} />
            <Route path='/update' />
            <Route path='/logout' />
        </Routes>
    </>
  )
}

export default AuthRouter;