//response type expected
export interface ForecastState {
    forecast: []
}

//request type expected
export interface Location {
    locationName: string
    postalCode: string
}

//response type of api response
export interface ILocation {
    locationName: string,
    currentTime: string,
    weather?: string
}
