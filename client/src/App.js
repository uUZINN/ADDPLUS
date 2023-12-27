import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './page/Home.jsx'


import Join01 from './components/user/Join01.jsx'
import Join02 from './components/user/Join02.jsx'
import Join03 from './components/user/Join03.jsx'
import Join04 from './components/user/Join04.jsx'

import Login from './components/user/Login.jsx'

import Find from './components/user/Find.jsx'
import Find02 from './components/user/Find02.jsx'
import Find03 from './components/user/Find03.jsx'

import Comm from './components/community/Comm.jsx'
import CommWrite from './components/community/CommWrite.jsx'
import CommDetail from './components/community/CommDetail.jsx'

import Score from './components/score/Score.jsx'

import Map from './components/map/Map.jsx'
import MapDetail from './components/map/MapDetail.jsx'
import Mapdepartment from './components/map/Mapdepartment.jsx'

import MypageScore from './components/mypage/MypageScore.jsx'
import MypageInput from './components/mypage/MypageInput.jsx'
import MypageActive from './components/mypage/MypageActive.jsx'
import MypageCollege from './components/mypage/MypageCollege.jsx'
import MypagePoint from './components/mypage/MypagePoint.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/map' element={<Map />}></Route>
        <Route path='/map/mapimg' element={<MapDetail />}></Route>
        <Route path='/map/department' element={<Mapdepartment />}></Route>

        <Route path='/comm' element={<Comm />}></Route>
        <Route path='/commwrite' element={<CommWrite />}></Route>
        <Route path='/commdetail' element={<CommDetail />}></Route>

        <Route path='/score' element={<Score />}></Route>

        <Route path='/mypage' element={<MypageScore />}></Route>
        <Route path='/mypageInput' element={<MypageInput />}></Route>
        <Route path='/mypageActive' element={<MypageActive />}></Route>
        <Route path='/mypageCollege' element={<MypageCollege />}></Route>
        <Route path='/mypagePoint' element={<MypagePoint />}></Route>

        <Route path='/join01' element={<Join01 />}></Route>
        <Route path='/join02' element={<Join02 />}></Route>
        <Route path='/join03' element={<Join03 />}></Route>
        <Route path='/join04' element={<Join04 />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/find' element={<Find />}></Route>
        <Route path='/find02' element={<Find02 />}></Route>
        <Route path='/find03' element={<Find03 />}></Route>
      </Routes>
    </>
  )
}

export default App