import {Location} from '../types'
import {APIKey} from '../config';
import BaseService from './baseService';

export const fetchLocation = (locationInfo: Location) => {
    return BaseService.post(`?q=${locationInfo.postalCode}&appid=${APIKey}`);
};
