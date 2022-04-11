import React from 'react'
import ShortInfoCity from '../ShortInfoCity/ShortInfoCity'
import {useDispatch, useSelector} from 'react-redux'
import {RootStore} from '../../store/store'
import CityCard from '../CityCard/CityCard'
import ExtraInfo from '../ExtraInfo/ExtraInfo'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader'
import H1 from '../H1/H1'

import st from './SelectedCity.module.scss'
import {Link} from 'react-router-dom'
import {weatherSlice} from '../../store/slices/weatherSlice'

const SelectedCity = () => {
  const dispatch = useDispatch()

  const {weather, saveCity, isLoading}: any = useSelector<RootStore>(state => state.weatherSliceReducer)
  const isEmpty = weather.mainInfo.name.length

  const addToFavorite = () => {
    dispatch(weatherSlice.actions.saveCity([...saveCity, weather.mainInfo]))
    localStorage.setItem('selectedCity', JSON.stringify([...saveCity, weather.mainInfo]))
  }

  return (
    <div className={st.SelectedCity}>
      {
        isEmpty === 0 ?
          <div className={st.SelectedCity__title}>
            <H1>Please, choose the city</H1>
          </div>
          :
          isLoading ?
            <SkeletonLoader/>
            :
            <>
              <CityCard>
                <Link to={weather.mainInfo.name} className={st.SelectedCity__link}>
                  <ShortInfoCity
                    mainInfo={weather.mainInfo}
                    addToFavorite={addToFavorite}
                  />
                </Link>
              </CityCard>
              <CityCard>
                <ExtraInfo extraInfo={weather.extraInfo}/>
              </CityCard>
            </>
      }
    </div>
  )
}

export default SelectedCity