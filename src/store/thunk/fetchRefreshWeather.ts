import {Dispatch} from '../store'
import {ServiceWeather} from '../../services/ServiceWeather'
import {weatherSlice} from '../slices/weatherSlice'
import {IRefreshWeatherData} from '../types/types'

export const fetchRefreshWeather = (payload: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(weatherSlice.actions.fetchWeather())
    const res = await ServiceWeather.getWeather(payload)
    if (res.status === 200) {
      const weather: IRefreshWeatherData = {
        refreshCity: {
          name: res.data.name,
          temp: res.data.main.temp,
          dt: res.data.dt,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
        },
      }
      dispatch(weatherSlice.actions.fetchRefreshWeatherDone(weather))
    } else {
      dispatch(weatherSlice.actions.fetchWeatherError(res))
    }
  } catch (error) {
    console.log(error)
  }
}