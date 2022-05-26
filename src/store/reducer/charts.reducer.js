import { GET_CHART } from "../action/action";




const chartReducer = (state = [] , action)=> {
    switch (action.type) {
        case GET_CHART:
            return [...action.payload]
    
        default:
            return state
            
    }
}

export default chartReducer