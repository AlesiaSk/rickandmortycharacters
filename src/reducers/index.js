import { combineReducers } from 'redux';
import LocationsReducer from './locations';

export default combineReducers({
    locations: LocationsReducer,
});
