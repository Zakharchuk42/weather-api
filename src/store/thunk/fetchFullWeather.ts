import {Dispatch} from '../store'
import {weatherSlice} from '../slices/weatherSlice'
import {ServiceWeather} from '../../services/ServiceWeather'
import {IFullWeatherData} from '../types/fullWeather'

export const fetchFullWeather = (payload: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(weatherSlice.actions.fetchFullWeather())
    const res = await ServiceWeather.getFullWeather(payload)
    if (res.status === 200) {
      const fullWeather: IFullWeatherData = {
        city: res.data.city,
        list: res.data.list,
      }
      dispatch(weatherSlice.actions.fetchFullWeatherDone(fullWeather))
    } else {
      dispatch(weatherSlice.actions.fetchFullWeatherError)
    }
  } catch (error) {
    console.log(error)
  }
}