import React, {FC, useEffect, useState} from 'react'
import {IMainInfo} from '../../store/types/types'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

import {ChooseSvg} from '../../assets/svg/ChooseSvg'
import st from './ShortInfoCity.module.scss'

interface Props {
  mainInfo: IMainInfo;
  saveCityBoolean?: boolean;
  removeSaveCity?: any;
  refreshWeatherCity?: any;
  addToFavorite?: any;
}

let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

const ShortInfoCity: FC<Props> = ({mainInfo, saveCityBoolean, removeSaveCity, addToFavorite, refreshWeatherCity}) => {
  const temp = Math.floor(mainInfo.temp)
  const date = new Date(mainInfo.dt * 1000)
  const icon = `https://openweathermap.org/img/wn/${mainInfo.icon}.png`
  const storage = JSON.parse(localStorage.getItem('selectedCity') as string)

  const [isDisable, setIsDisable] = useState<boolean>(false)

  useEffect(()=>{
    if(storage !== null) {
      storage.map((item: any)=> {
        if(item.name === mainInfo.name) {
          setIsDisable(true)
        }
      })
    }
  }, [])

  return (
    <Card>
      <div className={st.ShortInfoCity__wrap}>
        <div className={st.ShortInfoCity__header}>
          <div className={st.ShortInfoCity__city}>
            {mainInfo.name}
          </div>
          <div className={st.ShortInfoCity__day}>
            {date.getDate()}{months[date.getMonth()]}
          </div>
        </div>
        <div className={st.ShortInfoCity__content}>
          <div className={st.ShortInfoCity__temp}>
            {temp}°
          </div>
          <div className={st.ShortInfoCity__ico}>
            <img src={icon} alt="weather"/>
            <p className={st.ShortInfoCity__ico_text}>{mainInfo.description}</p>
          </div>
        </div>
        {
          saveCityBoolean ?
            <div className={st.ShortInfoCity__buttons}>
              <div
                className={st.ShortInfoCity__button}
                onClick={(e) => {
                  e.preventDefault()
                  removeSaveCity(mainInfo.name)
                }}
              >
                <ChooseSvg name={'trash'}/>
              </div>
              <div
                className={st.ShortInfoCity__button}
                onClick={(e) => {
                  e.preventDefault()
                  refreshWeatherCity(mainInfo.name)
                }}
              >
                <ChooseSvg name={'refresh'}/>
              </div>
            </div>
            :
            <div className={st.ShortInfoCity__buttons}>
              <Button
                variant="contained"
                disabled={isDisable}
                onClick={(e) => {
                  e.preventDefault()
                  setIsDisable(true)
                  addToFavorite()
                }}>
                Add
              </Button>
            </div>
        }
      </div>
    </Card>
  )
}

export default ShortInfoCity