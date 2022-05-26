import { GET_DATA } from "../action/action";




const currencyListReducer = (state = null , action)=> {
    switch (action.type) {
        case GET_DATA:
            return [...action.payload]
    
        default:
            return state
            
    }
}

export default currencyListReducer