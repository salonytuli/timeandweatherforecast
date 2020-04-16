import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../reducers/rootReducer'
import {ForecastState} from '../types'

interface initialStateInterface {
    forecast: ForecastState
}

const initialStore: initialStateInterface = {
    forecast: {
        forecast: [],
    }
};

const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
export const store = createStore(rootReducer, initialStore, composeEnhancers);
