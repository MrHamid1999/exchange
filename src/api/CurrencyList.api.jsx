import { useQuery } from "react-query"
import axios from "axios"
import { useDispatch } from "react-redux"
import { getData } from "../store/action/action"

const gettingList = async()=> {

        return axios.get("https://api.bitpin.ir/v1/mkt/markets")
        
}





const MarketList = ()=> {
    
   const dispatch = useDispatch()
    
    return useQuery("gettingList" , gettingList , {
        onSuccess : (result)=> {
            // storing the list of currencies in the redux store
            dispatch(getData(result.data.results))
        } , 
        onError : (err)=> {
            console.log(err);
        }
    })
    
     
}

export default MarketList