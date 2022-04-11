import React, {useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {fetchFullWeather} from '../../store/thunk/fetchFullWeather'
import {useDispatch, useSelector} from 'react-redux'
import {RootStore} from '../../store/store'

import st from './AllInfo.module.scss'
import {ChooseSvg} from '../../assets/svg/ChooseSvg'
import MainCard from '../../components/MainCard/MainCard'
import DailyTemp from '../../components/DailyTemp/DailyTemp'

const AllInfo = () => {
  const dispatch = useDispatch()
  const {id}: any = useParams()
  const nav = useNavigate()
  let dailyTemp = []
  let dailyTime = []
  let mainCard = {}

  useEffect(()=>{
    dispatch(fetchFullWeather(id))
  }, [])

  const {fullWeather= {}, isLoading}: any = useSelector<RootStore>(state => state.weatherSliceReducer)

  if(fullWeather.list.length > 1){
    mainCard = {
      temp: fullWeather.list[0].main.temp,
      icon: fullWeather.list[0].weather[0].icon,
      rain: fullWeather.list[0].pop,
      humidity: fullWeather.list[0].main.humidity,
      speed: fullWeather.list[0].wind.speed,
      clouds: fullWeather.list[0].clouds.all,
      description: fullWeather.list[0].weather[0].description,
      weather: fullWeather.list[0].weather[0].main,
    }
    for (let i = 1; i < 9; i++) {
      dailyTemp.push(Math.floor(fullWeather.list[i].main.temp))
      dailyTime.push(fullWeather.list[i].dt_txt.slice(11, 16))
    }
  }

  return (
    <div className={st.AllInfo}>
      <div className={st.AllInfo__innerHeader}>
        <div
          className={st.AllInfo__goBack}
          onClick={()=>nav(-1)}
        >
          <ChooseSvg name={'goBack'}/>
        </div>
        <div className={st.AllInfo__title}>
          {id}
        </div>
      </div>
      {
        isLoading ? ' LOADING ' :
          <>
            <MainCard mainCard={mainCard}/>
            <DailyTemp
              dailyTemp={dailyTemp}
              dailyTime={dailyTime}
            />
          </>
      }
    </div>
  )
}

export default AllInfo