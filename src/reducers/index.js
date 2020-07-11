import { combineReducers } from 'redux';
import CharacterReducer from './character';

export default combineReducers({
    locations: CharacterReducer,
});
