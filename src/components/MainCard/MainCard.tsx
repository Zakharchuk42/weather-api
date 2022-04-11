import React, {FC} from 'react'
import st from './MainCard.module.scss'
import Card from '@mui/material/Card'

interface Props {
  mainCard: any
}

const MainCard: FC<Props> = ({mainCard}) => {

  const temp = Math.floor(mainCard.temp)

  return (
    <Card>
      <div className={st.MainCard}>
        <div className={st.MainCard__ico}>
          <img src={`https://openweathermap.org/img/wn/${mainCard.icon}.png`}  alt="weather"/>
        </div>
        <div className={st.MainCard__temp}>
          {temp}°
        </div>
        <div className={st.MainCard__info}>
          <div className={st.MainCard__col}>
            <div className={st.MainCard__info_row}>
              <p>Chance of precipitation:</p> {mainCard.rain * 100}%
            </div>
            <div className={st.MainCard__info_row}>
              <p>Humidity:</p> {mainCard.humidity}%
            </div>
            <div className={st.MainCard__info_row}>
              <p>Wind:</p> {mainCard.speed}m/s
            </div>
          </div>
          <div className={st.MainCard__col}>
            <div className={st.MainCard__info_row}>
              <p>Clouds:</p> {mainCard.clouds}%
            </div>
            <div className={st.MainCard__info_row}>
              <p>Description:</p> {mainCard.description}
            </div>
            <div className={st.MainCard__info_row}>
              <p>Weather:</p> {mainCard.weather}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default MainCard