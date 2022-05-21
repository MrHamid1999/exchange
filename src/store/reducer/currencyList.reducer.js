import { GET_DATA } from "../action/action";


const initialState = [];

const currencyListReducer = (state = initialState , action)=> {
    switch (action.type) {
        case GET_DATA:
            return action.payload
    
        default:
            return state
            
    }
}

export default currencyListReducer