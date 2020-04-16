import {combineReducers} from 'redux'
import ForecastReducer from './forecastReducer';

const rootReducer = combineReducers({
    forecast: ForecastReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
