import React from 'react'

import Navigation from '../components/layouts/Navigation';
import { Route, Routes} from 'react-router-dom';
import GuestBook from '../pages/GuestBook';
import Board from '../pages/Board';

const NavRouter = () => {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" />
      <Route path='/guestbook' element={<GuestBook/>} />
      <Route path='/board' element={<Board/>} />
    </Routes>
  </>
  )
}

export default NavRouter;