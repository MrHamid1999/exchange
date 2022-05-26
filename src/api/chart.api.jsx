import { useQuery } from "react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCharts } from "../store/action/action";

const getChartList = async()=> {
    return axios.get("https://api.bitpin.ir/v1/mkt/markets/charts")
}



const GetCharts = ()=> {

    const dispatch = useDispatch()

    return useQuery("getChartList" , getChartList, {refetchInterval : 5000 , 
        onSuccess : (result)=> {
            dispatch(getCharts(result.data.results))
        }
    })
}

export default GetCharts