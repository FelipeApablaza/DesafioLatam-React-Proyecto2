import {combineReducers} from "redux";
import episodes from './Episodes/reducer'
import characters from  './Characters/reducer'
import authentication from './Authentication/reducer'

export default combineReducers({
    episodes,
    characters,
    authentication
})