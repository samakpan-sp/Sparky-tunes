import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import Library from '../screens/library/library';
import Feed from '../screens/feed/feed';
import Trending from '../screens/trending/trending';
import Player from '../screens/player/player';
import Favourites from '../screens/favourites/favourites';
import LogIn from '../screens/auth/login';
import './home.css'

export default function Home() {
  return (
    
    <Router>
      <div className='main-body'>
        <LogIn />
      {/* <Sidebar />
      <Routes>
            <Route path='/' element={<Library />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/player' element={<Player />} />
            <Route path='/favourites' element={<Favourites />} />

        </Routes> */}
      </div>
    </Router>
    
  )
}
