import React, {FC} from 'react'
import {ChooseSvg} from '../../assets/svg/ChooseSvg'
import {IExtraInfo} from '../../store/types/types'

import st from '../ExtraInfo/ExtraInfo.module.scss'
import Card from '@mui/material/Card'

interface Props {
  extraInfo: IExtraInfo;
}

const ExtraInfo: FC<Props> = ({extraInfo}) => {

  const feelsTemp = Math.floor(extraInfo.feels_like)
  let dateSunrise = new Date(extraInfo.sunrise * 1000)
  let dateSunset = new Date(extraInfo.sunset * 1000)

  return (
    <Card className={st.ExtraInfo__card}>
      <div className={st.ExtraInfo}>
        <div className={st.ExtraInfo__rowInfo}>
          <div className={st.ExtraInfo__ico}>
            <ChooseSvg name={'temp'} />
          </div>
          <p>Feels like:</p> {feelsTemp}°
        </div>
        <div className={st.ExtraInfo__rowInfo}>
          <div className={st.ExtraInfo__ico}>
            <ChooseSvg name={'wind'} />
          </div>
          <p>Wind:</p> {extraInfo.windSpeed} m/s
        </div>
        <div className={st.ExtraInfo__rowInfo}>
          <div className={st.ExtraInfo__ico}>
            <ChooseSvg name={'sunrise'} />
          </div>
          <p>Sunrise:</p> {dateSunrise.getHours()}:{dateSunrise.getMinutes()} AM
        </div>
        <div className={st.ExtraInfo__rowInfo}>
          <div className={st.ExtraInfo__ico}>
            <ChooseSvg name={'sunset'} />
          </div>
          <p>Sunset:</p> {dateSunset.getHours()}:{dateSunset.getMinutes()} PM
        </div>
      </div>
    </Card>
  )
}

export default ExtraInfo