import {FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR} from '../constants/actionCreators';
import {AnyAction} from 'redux'
import {ForecastState} from '../types'

const InitialForecast: ForecastState = {
    forecast: []
};

const ForecastReducer = (state = InitialForecast, action: AnyAction) => {
    switch (action.type) {
        case FETCH_LOCATION_SUCCESS: {
            return {...state, forecast: action.payload};
        }
        case FETCH_LOCATION_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
};

export default ForecastReducer;
