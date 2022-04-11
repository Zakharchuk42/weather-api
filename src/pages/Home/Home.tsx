import React from 'react'
import SelectedCity from '../../components/SelectedCity/SelectedCity'
import SaveCity from '../../components/SaveCity/SaveCity'

import st from './Home.module.scss'
import H1 from '../../components/H1/H1'

const Home = () => {

  return (
    <div className={st.Home}>
      <SelectedCity/>
      <H1>Favorite City</H1>
      <SaveCity/>
    </div>
  )
}

export default Home