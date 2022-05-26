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
      height : "100%"
    } , 
    chart : {
      width : "60%" , 
      height : "50%"
    }
     

}))

const Item = () => {


const getCharts = GetCharts()  
const {id} = useParams()
const charts = useSelector(state => state.chart) || null
const selectedChart = charts.filter(item => item.id == id)
const [data , setData] = useState({labels:[] , datasets :[]})
const classes = useStyles()
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const convertTime = (time )=> {
  
  const hours = new Date(time).getHours()
  const minutes = new Date(time).getMinutes()
  return hours+ ":" +minutes
}

const difineDatasets = ()=> {
  const data =[{
      
      label : "BTC" ,
      data : selectedChart[0].chart.map(item => item.price), 
      borderColor: 'rgb(9, 1, 163)',
      backgroundColor: 'rgba(255, 255, 255, 0.956)'
  }]

  setData({
    labels : selectedChart[0].chart.map(item => convertTime(item.created_at)) , 
    datasets : data
  })
}

useEffect(() => {
  difineDatasets()
}, [])



  return (
    <Box className={clsx(classes.root)}>
      <Line 
      
      data={data}
      />
    </Box>
  )
}

export default Item