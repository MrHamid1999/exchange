import {Box } from "@mui/material"
import {makeStyles} from "@mui/styles"
import clsx from "clsx" ; 

const useStyles = makeStyles(theme=>({
    root : {
        height : "100%" , 
        width : "100%" , 
        display : "flex" , 
        alignItems : "center" , 
        justifyContent : "center" , 
        

    }
}))
const Home = () => {

const classes = useStyles()

  return (
    <Box className={clsx(classes.root)}>
        <header>
            this is the header
        </header>
    </Box>
  )
}

export default Home