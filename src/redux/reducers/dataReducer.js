import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { GET_DATA_ERROR, GET_DATA_LOAD, GET_DATA_SUCCESS } from "../constants";



export const allData = (state={loading:true},action)=>{
    switch (action.type) {
        case GET_DATA_LOAD:
            return{
                loading: true,
                items:[]
            }
        case GET_DATA_SUCCESS:
            return{
                loading:false,
                items:action.payload
            }
        case GET_DATA_ERROR:
            return{
                loading:false,
                item:[],
                error:action.payload
            }
            
    
        default:
           return state;
    }

}