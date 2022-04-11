import axios, {AxiosResponse} from 'axios'
import {IWeatherDataResponse} from '../store/types/types'
import {IFullWeatherData, IFullWeatherResponse} from '../store/types/fullWeather'

const API_KEY = '683d7692fb6eb6f70faddc46badbf348'
const URL = 'https://api.openweathermap.org/data/2.5'

export class ServiceWeather {
  static getWeather(payload: string): Promise<AxiosResponse<IWeatherDataResponse>> {
    return axios.get<IWeatherDataResponse>(`${URL}/weather?q=${payload}&units=metric&APPID=${API_KEY}`)
  }

  static getFullWeather(payload: string): Promise<AxiosResponse<IFullWeatherData>> {
    return axios.get<IFullWeatherResponse>(`${URL}/forecast?q=${payload}&units=metric&appid=${API_KEY}`)
  }
}