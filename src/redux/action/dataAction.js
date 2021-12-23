import axios from "axios"
import { GET_DATA_ERROR, GET_DATA_LOAD, GET_DATA_SUCCESS } from "../constants"

export const getData = ()=>async(dispatch)=>{

    try {
        dispatch({
            type:GET_DATA_LOAD
        })

        const {data} =await axios.get("https://jsonplaceholder.typicode.com/todos")

        dispatch({
            type:GET_DATA_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:GET_DATA_ERROR,
            payload:error
        })
    }

}