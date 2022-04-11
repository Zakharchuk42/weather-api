export interface IMainInfo {
  name: string,
  temp: number,
  dt: number,
  description: string,
  icon: string,
}

export interface IExtraInfo {
  windSpeed: number,
  sunrise: number,
  sunset: number,
  feels_like: number,
}

export interface IWeatherData {
  mainInfo: IMainInfo,
  extraInfo: IExtraInfo,
}

export interface Weather {
  description: string,
  icon: string,
  id: number,
  main: string,
}

export interface IRefreshWeatherData {
  refreshCity: {
    name: string,
    temp: number,
    dt: number,
    description: string,
    icon: string,
  },
}

export interface IWeatherDataResponse {
  base: string,
  clouds: {
    all: number,
  },
  cod: number,
  coord: {
    lon: number,
    lat: number,
  },
  dt: number,
  id: number,
  main: {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  name: string,
  sys: {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number,
  },
  timezone: number,
  visibility: number,
  weather: Weather[],
  wind: {
    speed: number,
    deg: number,
  },
}