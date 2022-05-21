import { GET_CHART } from "../action/action";


const initialState = [];

const chartReducer = (state = initialState , action)=> {
    switch (action.type) {
        case GET_CHART:
            return action.payload
    
        default:
            return state
            
    }
}

export default chartReducer