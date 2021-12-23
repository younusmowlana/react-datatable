import {combineReducers} from 'redux'
import { allData } from './reducers/dataReducer';



const rootReducer = combineReducers({
    allData:allData,
})

export default rootReducer;