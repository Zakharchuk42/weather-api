import React, {useState} from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import {useDispatch} from 'react-redux'
import {fetchWeather} from '../../store/thunk/fetchWeather'
import {ChooseSvg} from '../../assets/svg/ChooseSvg'
import H1 from '../H1/H1'
import {Link} from 'react-router-dom'

import st from './Header.module.scss'

const ariaLabel = {'aria-label': 'description'}

const Header = () => {
  const dispatch = useDispatch()

  const [city, setCity] = useState<string>('')

  const searchCity = (city: string) => {
    dispatch(fetchWeather(city))
    setCity('')
  }

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value)

  return (
    <Card>
      <header className={st.Header}>
        <div className={st.Header__wrap}>
          <Link to={'/'} className={st.Header__link}>
            <div className={st.Header__logo}>
              <ChooseSvg name={'logo'}/>
            </div>
            <div className={st.Header__title}>
              <H1>Awesome Weather</H1>
            </div>
          </Link>
        </div>
        <div className={st.Header__wrap}>
          <Button
            variant="contained"
            onClick={() => searchCity(city)}
          >
            Search
          </Button>
          <div className={st.Header__select}>
            <Input
              placeholder="Type the city..."
              inputProps={ariaLabel}
              value={city}
              onChange={changeInput}
            />
          </div>
        </div>
      </header>
    </Card>
  )
}

export default Header