import React from 'react'

import Navigation from '../components/includes/Navigation';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import GuestBook from '../components/GuestBook';
import Board from '../components/Board';

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