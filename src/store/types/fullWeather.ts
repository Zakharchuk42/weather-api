export interface IFullMainInfo {
  coord: {
    lat: number,
    lon: number,
  },
  country: string,
  id: number,
  name: string,
  population: number,
  sunrise: number,
  sunset: number,
  timezone: number,
}

export interface IFullWeatherData {
  city: IFullMainInfo,
  list: [],
}

export interface IFullWeatherResponse {
  city: IFullMainInfo,
  list: [],
}