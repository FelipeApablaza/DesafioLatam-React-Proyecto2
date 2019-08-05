import {combineReducers} from "redux";
import episodes from './Episodes/reducer'
import characters from  './Characters/reducer'

export default combineReducers({
    episodes,
    characters
})