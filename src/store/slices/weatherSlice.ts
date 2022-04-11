import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IMainInfo, IRefreshWeatherData, IWeatherData, IWeatherDataResponse} from '../types/types'
import {AxiosResponse} from 'axios'
import {IFullWeatherData} from '../types/fullWeather'

interface IWeatherSlice {
  weather: IWeatherData | null;
  isLoading: boolean;
  response: IResponseWeather;
  fullWeather: IFullWeatherData;
  saveCity: [];
  refreshCity: {
    name: string,
    temp: number,
    dt: number,
    description: string,
    icon: string,
  };
}

interface IResponseWeather {
  status: number;
  message: string;
}

const initialState: IWeatherSlice = {
  weather: {
    mainInfo: {
      name: '',
      temp: 0,
      dt: 0,
      description: '',
      icon: '',
    },
    extraInfo: {
      feels_like: 0,
      sunrise: 0,
      sunset: 0,
      windSpeed: 0,
    },
  },
  isLoading: true,
  response: {
    status: 0,
    message: '',
  },
  fullWeather: {
    city: {
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
      id: 0,
      name: '',
      population: 0,
      sunrise: 0,
      sunset: 0,
      timezone: 0,
    },
    list: [],
  },
  saveCity: [],
  refreshCity: {
    name: '',
    temp: 0,
    dt: 0,
    description: '',
    icon: '',
  },
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeather(state) {
      state.isLoading = true
    },
    fetchWeatherDone(state, action: PayloadAction<IWeatherData>) {
      state.weather = action.payload
      state.isLoading = false
    },
    fetchWeatherError(state, action: PayloadAction<AxiosResponse<IWeatherDataResponse>>) {
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
      state.isLoading = false
    },
    fetchRefreshWeather(state) {
      state.isLoading = true
    },
    fetchRefreshWeatherDone(state, action: PayloadAction<IRefreshWeatherData>) {
      state.refreshCity = action.payload.refreshCity
      state.isLoading = false
    },
    fetchFullWeather(state) {
      state.isLoading = true
    },
    fetchFullWeatherDone(state, action: PayloadAction<IFullWeatherData>) {
      state.fullWeather = action.payload
      state.isLoading = false
    },
    fetchFullWeatherError(state, action: PayloadAction<AxiosResponse<IFullWeatherData>>) {
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
      state.isLoading = false
    },
    saveCity (state, action: any) {
      state.saveCity = action.payload
    },
  },
})

export default weatherSlice.reducer