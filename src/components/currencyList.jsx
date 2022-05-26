import {makeStyles} from "@mui/styles";
import clsx from "clsx"
import {Card , Box , Typography} from "@mui/material"
import Option from "./option";


const useStyles = makeStyles(theme=> ({
  root : {
      position: "relative",
      width : "90%" , 
      margin : "auto" , 
      boxShadow : "5px 5px 10px #000000d4" ,
      direction: "rtl", 
      overflow: "auto !important", 
      padding : "2% 0 ", 
      textDecoration : "none" ,
      borderRadius: " 0 0 10px 10px" , 
      backgroundColor : "white"
     

  } , 
  header : {
    // position :"fixed" , 
    top:"50px",
    display : "grid", 
    gridTemplateColumns : "repeat(4, 1fr)" , 
    width : "95%", 
    margin :"auto", 
    "& p" : {
      display : "flex" , 
      justifyContent :"center"
    }
    
  }
}))


const CurrencyList = ({props}) => {

  const classes  = useStyles()   
  const items = props

  
  
  return (
    <Box className={clsx(classes.root)}>
      <Box className={clsx(classes.header)}>
        <Typography>رمز ارز </Typography>
        <Typography>قیمت</Typography>
        <Typography>تغییرات </Typography>
        <Typography>علاقه مندی </Typography>
      </Box>
        {items.map(item => {
            return (
                <Box xs="12" key={item.id}>
                    <Option props={item} />
                </Box>
            )
        }) }
    </Box>
  )
}

export default CurrencyList