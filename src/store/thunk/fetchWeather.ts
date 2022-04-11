import {Dispatch} from '../store'
import {ServiceWeather} from '../../services/ServiceWeather'
import {weatherSlice} from '../slices/weatherSlice'
import {IWeatherData} from '../types/types'

export const fetchWeather = (payload: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(weatherSlice.actions.fetchWeather())
    const res = await ServiceWeather.getWeather(payload)
    if (res.status === 200) {
      const weather: IWeatherData = {
        mainInfo: {
          name: res.data.name,
          temp: res.data.main.temp,
          dt: res.data.dt,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
        },
        extraInfo: {
          windSpeed: res.data.wind.speed,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
          feels_like: res.data.main.feels_like,
        },
      }
      dispatch(weatherSlice.actions.fetchWeatherDone(weather))
    } else {
      dispatch(weatherSlice.actions.fetchWeatherError(res))
    }
  } catch (error) {
    console.log(error)
  }
}