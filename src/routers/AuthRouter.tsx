import React from 'react'
import { Route, Routes} from 'react-router-dom';
import AuthMenu from '../components/layouts/AuthMenu';
import Login from '../pages/user/Login';
import Join from '../pages/user/Join';
import JoinSuccess from '../pages/user/JoinSuccess';
import Update from '../pages/user/Update';
import UpdateSuccess from '../pages/user/UpdateSuccess';

const AuthRouter = () => {
  return (
    <>
      <AuthMenu/>
        <Routes>
            <Route path="/user/login" element={<Login/>}/>
            <Route path="/user/join" element={<Join/>}/>
            <Route path='/user/joinsuccess' element={<JoinSuccess/>} />
            <Route path='/user/update' element={<Update/>}/>
            <Route path='/user/updatesuccess' element={<UpdateSuccess/>}/>
            <Route path='/logout' />
        </Routes>
    </>
  )
}

export default AuthRouter;