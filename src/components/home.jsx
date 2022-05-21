import {Box , Container} from "@mui/material"
import {makeStyles} from "@mui/styles"
import clsx from "clsx" ; 
import MarketList from "../api/CurrencyList.api";
import GetCharts from "../api/chart.api";

const useStyles = makeStyles(theme=>({
    root : {
        height : "100%" ,
        minHeight : "100vh" ,  
        background: "url(./img/bg-pic.jpeg)",
        display : "flex" , 
        alignItems : "center" , 
        justifyContent : "center" , 
        flexDirection : "column"
    } , 
    
}))
const Home = () => {

  const marketList = MarketList()
  const getCharts = GetCharts()


const classes = useStyles()

  return (
    <Box  className={clsx(classes.root)}>
          <div ></div>
          this is 
    </Box>
  )
}

export default Home