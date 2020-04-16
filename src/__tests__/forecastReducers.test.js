import ForecastReducer from '../reducers/forecastReducer';
import {FETCH_LOCATION_SUCCESS} from "../constants/actionCreators";

describe("reducers", () => {
    it("fetch the location and weather", () => {
        const initialState = {forecast: []};
        const action = {
            type: FETCH_LOCATION_SUCCESS,
            payload: {
                forecast: [{
                    locationName: "Australia/Brisbane",
                    currentTime: "4/11/2020, 8:53:01 PM",
                    weather: "38.85°C"
                }]
            }
        };
        const expected = {
            forecast: {
                "forecast": [{
                    locationName: "Australia/Brisbane",
                    currentTime: "4/11/2020, 8:53:01 PM",
                    weather: "38.85°C"
                }]
            }
        };
        const state = ForecastReducer(initialState, action);
        expect(state).toStrictEqual(expected)
    })
});