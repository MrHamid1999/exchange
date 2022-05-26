import { useQuery } from "react-query"
import axios from "axios"
import { useDispatch } from "react-redux"
import { getData } from "../store/action/action"

const gettingList = async()=> {

        return axios.get("https://api.bitpin.ir/v1/mkt/markets")
        
}
// getting the values based on Tooman currency
// just return the item if the id is odd
const filterData = (data)=> {
   return data.filter(item => item.code.includes("IRT") )
}



const MarketList = ()=> {
    
   const dispatch = useDispatch()
    
    return useQuery("gettingList" , gettingList , {refetchInterval : 5000 , 
        onSuccess : (result)=> {
            const data = result.data.results ;
            const filteredData = filterData(data)
            // storing the list of currencies in the redux store
            dispatch(getData(filteredData))
        } , 
        onError : (err)=> {
            console.log(err);
        }
    })
    
     
}

export default MarketList