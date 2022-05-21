
export const GET_DATA = "GET DATA"; 
export const GET_CHART = "GET CHART"; 


export const getData = (data)=> {

        return {
            type : GET_DATA ,
            payload : data
        }
    
}

export const getCharts = (data)=> {
    return {
        type : GET_CHART , 
        payload : data
    }
}
