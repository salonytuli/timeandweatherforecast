import {Dispatch} from 'redux';

import {FETCH_LOCATION_ERROR, FETCH_LOCATION_SUCCESS} from '../constants/actionCreators';
import {kelvinToCelsius} from '../constants/kelvinToCelsius';
import {fetchLocation} from '../services';
import {Location, ILocation} from '../types';

const fetchCurrentTimeAndWeather = (locationInfo: Location[]) => {
    let locationArray: ILocation[] = [];
    return (dispatch: Dispatch) => {
        const reqs: any = [];
        locationInfo.forEach((loc: Location) => {
            locationArray.push({
                locationName: loc.locationName,
                currentTime: new Date().toLocaleString('en-US', {
                    timeZone: loc.locationName
                }).toString()
            });
            reqs.push(fetchLocation(loc))
        });
        Promise.all(reqs).then(res => {
            res.forEach((r: any, index: number) => {
                locationArray[index] = {
                    ...locationArray[index],
                    weather: kelvinToCelsius(r.data.main.temp)
                }
            });
            dispatch({
                type: FETCH_LOCATION_SUCCESS,
                payload: locationArray
            })
        }).catch(err => {
            dispatch({
                type: FETCH_LOCATION_ERROR,
                payload: err
            })
        })
    }
};

export default fetchCurrentTimeAndWeather;
