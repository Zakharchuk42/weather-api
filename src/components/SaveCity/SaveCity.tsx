import React, {useEffect} from 'react'
import ShortInfoCity from '../ShortInfoCity/ShortInfoCity'
import CityCard from '../CityCard/CityCard'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {RootStore} from '../../store/store'
import {weatherSlice} from '../../store/slices/weatherSlice'
import {fetchRefreshWeather} from '../../store/thunk/fetchRefreshWeather'

import st from './SaveCity.module.scss'

const SaveCity = () => {
  const dispatch = useDispatch()
  const storage = JSON.parse(localStorage.getItem('selectedCity') as string) || []
  const {saveCity, refreshCity}: any = useSelector<RootStore>(state=>state.weatherSliceReducer)

  useEffect(() => {
    dispatch(weatherSlice.actions.saveCity(storage || []))
  }, [])

  useEffect(() => {
    const newStorage = storage.map((item:any) => {
      if (item.name === refreshCity.name) {
        return refreshCity;
      }
      return item;
    });
    dispatch(weatherSlice.actions.saveCity(newStorage))
    localStorage.setItem('selectedCity', JSON.stringify(newStorage))
  }, [refreshCity])

  const removeSaveCity = (name: string) => {
    const newStorage = storage.filter((item: any)=>item.name !== name)
    dispatch(weatherSlice.actions.saveCity(newStorage))
    localStorage.setItem('selectedCity', JSON.stringify(newStorage))
  }

  const refreshWeatherCity = (name: string) => {
    dispatch(fetchRefreshWeather(name))
  }

  return (
    <div className={st.SaveCity}>
      {
        saveCity.length === 0 ?
          <div className={st.SaveCity__haveNot}>You have not the favorite City, choose one, please</div>
          :
          saveCity.map((item: any) => {
            return (
              <CityCard key={item.name}>
                <Link to={item.name}>
                  <ShortInfoCity
                    saveCityBoolean={true}
                    mainInfo={item}
                    removeSaveCity={removeSaveCity}
                    refreshWeatherCity={refreshWeatherCity}
                  />
                </Link>
              </CityCard>
            )
          })
      }
    </div>
  )
}

export default SaveCity

