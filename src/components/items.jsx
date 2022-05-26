import { useEffect } from "react"
import {makeStyles} from "@mui/styles"
import { Box , Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Favorite , FavoriteBorderOutlined} from "@material-ui/icons"
import clsx from "clsx"
import { useState } from "react"
import Cookies from "js-cookie"


const useStyles = makeStyles(theme=> ({
      container : {
        width : "95%" , 
        display: "grid" , 
        gridTemplateColumns : "repeat(4 , 1fr)", 
        padding : "1%"  , 
        border : "2px solid #520a6f", 
        borderRadius : "10px", 
        margin: "10px auto" , 
        color : "black" , 
        [theme.breakpoints.down("sm")] : {
          "& p":{
            fontSize: "12px", 
            padding : "5px 0 "

          }
        },
        "& > div , & p" : {
          width : "100%" , 
          display: "flex" , 
          justifyContent: "center"
        } ,
        "&:hover" : {
          cursor : "default" , 
          background : "rgba(0,0,0,0.3)"
        }
      } , 
      info:{
        width : "100%" , 
        display: "flex", 
        justifyContent:"spce-between !important"
      },
      image : {
          width : "30px" , 
          marginLeft : "10px" , 
          height : '30px'

      } , 
      title : {
        "& p:nth-child(even)" : {
          color : "gray" , 
          display: " flex" , 
          flexDirection : "column", 
          [theme.breakpoints.down("sm")] : {
            display : "none"
          }
        }
      }, 
      change : {
        // backgroundColor : `green` ,
        color : "white" , 
        borderRadius : "5px" , 
        display : "flex" , 
        alignItems : "center", 
        justifyContent : "center", 
        width : "100px", 
        direction : "ltr"
      } , 
      price : {
        height: "100%" , 
        display: "flex" , 
        alignItems : "center"
      }, 
      icon : {
        color : "red" , 
        cursor: "pointer", 
        [theme.breakpoints.down("sm")] : {
          display: "none"
        }
        
      }
}))

const Item = ({props}) => {

  const data = props.currency1
  const [isFave , setISFave] = useState(false)
  const classes = useStyles(props) ; 
  const bgColor = props.price_info.change >= 0 ? "green" : "red"
  const favorites =JSON.parse(Cookies.get("favorite")).items 
  const price = props.price_info.change
  // adding the coin to favorites 
  const addItem = ()=> {
    const item = data.code
    const list = [...favorites , item]
    Cookies.set("favorite" , JSON.stringify({items : list}))
    console.log(list);
  }
  // removing the coin from favorites 
  const removeItem = ()=> {
    const item = data.code 
    const list = favorites.filter(coin => coin !== item)
    Cookies.set("favorite" , JSON.stringify({items : list}))

  }

  // controlling onClick event
  // setting the coin to favorites or remove it from the list 
  // changing the type of heart icon 
  const toggleFave =(e)=> {
    e.preventDefault()
    setISFave(!isFave)
    isFave ? removeItem() : addItem() 
  }

  useEffect(() => {
    // if the coin is in the favorite list change the type of icon 
    // change isFave to change the color of  icon 
    favorites.forEach(item => {
      if(item  == data.code){
        setISFave(true)
      }
    })
  }, [])
  
 
  return (
   <Link to={`../market/${props.id}`}>
    <Box variant="outlined" className={clsx(classes.container)}>
      <Box>
        <Box className={clsx(classes.info)}>
        <Box 
        component="img" 
        className={clsx(classes.image)}
        src={data.image}
        />
       <Box className={clsx(classes.title)}>
        <Typography>{data.code}</Typography>  
        <Typography >{data.title_fa}</Typography>  
        </Box>
       </Box>
      </Box>
      <Typography className={clsx(classes.price)}>{props.price}</Typography>
      <Typography className={clsx(classes.change)} style={{background :bgColor}}>{props.price_info.change +"%"}</Typography>
      <Box className={clsx(classes.icon)} onClick={toggleFave}>
      {isFave ? <Favorite  /> : <FavoriteBorderOutlined/>}
      </Box>
    </Box>
  </Link>
  )
}

export default Item