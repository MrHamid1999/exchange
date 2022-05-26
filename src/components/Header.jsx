import clsx from "clsx"
import { makeStyles } from "@mui/styles"
import {Link} from "react-router-dom"
const useStyles = makeStyles(theme=> ({
    header : {
      width : "100%" , 
      height : "10vh" , 
      background : "#040461", 
      display : "flex " , 
      alignItems : "center" , 
       
      "& nav" :{
          width : "100%" ,
          [theme.breakpoints.down('sm')] : {
                display: "none"
            
        } ,
      } , 
      "& ul" : {
        color : "white", 
        display : "flex", 
        justifyContent : "flex-end" , 
        alignItems : "center" , 
        width : "100%" , 
        "& li" : {
          listStyle : "none", 
          width : "15%" , 
          fontWeight : "700" ,
          "&:hover " : {
            color : "#e1ff00" , 
            cursor: "pointer" , 
          }
        }

      } ,
       
    }
}))
const Header = () => {

    const classes = useStyles()
  return (
    <div className={clsx(classes.header)}>
            <nav>
              <ul>
                <li>  درباره ما  </li>
                <li>  تماس با ما   </li>
                <li><Link to="market">بازار </Link></li>
                <li><Link to="/">خانه </Link></li>
              </ul>
            </nav>
          </div>
  )
}

export default Header