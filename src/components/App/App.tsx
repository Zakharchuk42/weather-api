import React from 'react'
import Header from '../Header/Header'
import {Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import AllInfo from '../../pages/AllInfo/AllInfo'

import st from './App.module.scss'

const App = () => {
  return (
    <div className={st.App}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<AllInfo/>} />
      </Routes>
    </div>
  )
}

export default App