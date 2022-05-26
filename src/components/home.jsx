import {useEffect}from "react"
import {Box } from "@mui/material"
import {makeStyles} from "@mui/styles"
import clsx from "clsx" ; 
import MarketList from "../api/CurrencyList.api";
import GetCharts from "../api/chart.api";
import { useSelector } from "react-redux";
import { useState } from "react";
import CurrencyList from "./currencyList";
import NoItem from "./noItem";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"
 

const useStyles = makeStyles(theme=>({
    root : {
        height : "auto" ,
        minHeight : "150vh" ,  
        display : "flex" , 
        alignItems : "center" , 
        flexDirection : "column",
        justifyContent : "flex-start" ,
        width : "100%" , 
        background : "#b4b4b4"
    } , 
   
    favorite : {
      width : "70%" , 
      height : "30vh" , 
      direction: "rtl", 
      marginTop : "10vh" , 
      [theme.breakpoints.down("md")] :{
        width : "95%"
      } , 
      "& >h2" : {
       width : "90%" , 
       display : "flex" , 
       justifyContent : "center" ,
       paddingBottom :"2%",
       background: "rgb(46, 246, 122)", 
       margin :"auto"

      } , 
      


    }   ,
    list : {
      width : "70%" , 
      height : "30vh" , 
      direction: "rtl", 
      marginTop : "25vh" , 
      [theme.breakpoints.down("md")] :{
        width : "95%"
      } , 
      "& >h2" : {
       width : "90%" , 
       display : "flex" , 
       justifyContent : "center" ,
       paddingBottom :"2%",
       margin :"auto" ,
       background: "rgb(46, 246, 122)", 

      } , 

    } , 
    goBtn  : {
        color : "white", 
        textDecoration : "none" ,
        fontSize : "1.5rem" , 
        "& div" :{
          width : "90%" , 
          height  :"50px" , 
          background : "#1b8ae5",
          margin:"auto" , 
          display : "flex" , 
          alignItems : "center" , 
          justifyContent : 'center' , 
          "&:hover" : {
            background : "#014b88"
          }
  
        
      }
    }
}))


// controoling the cookie 
// if the cookie doesn't exsit set one 
// else just get the cookie info
const getCookie = ()=> {
  
  if(Cookies.get("favorite") == undefined)
  {
    Cookies.set("favorite" , JSON.stringify({items : []})) ; 

  }

  return Cookies.get("favorite")
}




const Home = () => {

  
  const classes = useStyles()

  // calling the api components in order to start get data
  const marketList = MarketList()
  const getCharts = GetCharts()

 
  // getting the list of coins 
  const coins = useSelector(state => state.currencyList)
  const [firstPageCoins ,setFirstPageCoins] = useState()
  const [fave , setFave] = useState([])
 
  console.log(coins);

  // filtering the favorite coins 
  // getting favorite coins which are stored in cookie 
  
  const favorite =(data)=> {

    let faveList =[]; 
    const saved =JSON.parse(getCookie()).items
    // filtering based on each coin 
    data.filter(coin => {
      saved.forEach(item => {
        if(coin.currency1.code == item)
        faveList.push(coin)
        
      });
    })
    return faveList
  }
  
  useEffect(() => {
    setFave(coins &&  favorite(coins))
    setFirstPageCoins(coins && coins.filter(item => item.id <= 8))
  }, [coins])
  
  
  return (
    <Box  className={clsx(classes.root)}>
          
          <Box className={clsx(classes.favorite)}> 
            <h2 > علاقه مندی ها </h2>
            {fave ? <CurrencyList props={fave} /> : <NoItem />}
          </Box>
          <Box className={clsx(classes.list)}> 
            <h2 > رمز ارزها</h2>
            {firstPageCoins ? <CurrencyList props={firstPageCoins} /> : <NoItem />}
          <Link to="market" className={clsx(classes.goBtn)}>
            <Box>نمایش همه</Box>
          </Link>
          </Box>
    </Box>
  )
}

export default Home