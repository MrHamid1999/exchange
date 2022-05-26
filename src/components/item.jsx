import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import GetCharts from "../api/chart.api"
import { useState } from "react"
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=> ({
    root : {
      width : "100%" , 
      height : "100vh" , 
      display : "flex" , 
      alignItems : "center" , 

    } , 
    chart : {
      width : "800px" , 
      height : "500px"
    }
     

}))


const Item = () => {


const getCharts = GetCharts()  
const {id} = useParams()
const coins = useSelector(state => state.currencyList)
const coin = coins.filter(item => item.id == id )
const charts = useSelector(state => state.chart) 
const selectedChart = charts.filter(item => item.id == id)
const [data , setData] = useState({labels:[] , datasets :[]})
const classes = useStyles()



// defining chart parts
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// changing the given time to real time 
const convertTime = (time )=> {
  
  const hours = new Date(time).getHours()
  const minutes = new Date(time).getMinutes()
  const seconds = new Date(time).getSeconds()
  return hours+ ":" +minutes +":" + seconds
}

// settin data for chart 
const difineDatasets = ()=> {
  const data =[{
      
      label : "Coin",
      data : charts.length >0 && selectedChart[0].chart.map(item => item.price), 
      borderColor: 'rgb(9, 1, 163)',
      backgroundColor: 'white' ,
      width : "90%" ,
      points : "false"
  }]

   setData({
    labels : selectedChart[0].chart.map(item => convertTime(item.created_at)) , 
    datasets : data
  })
}

useEffect(() => {
 charts.length >0  && difineDatasets()
}, [charts])



  return (
    <Box className={clsx(classes.root)}>
    
          <Line 
            data={data}
          />
      
    </Box>
  )
}

export default Item