import {Card , Typography} from "@mui/material"
import { makeStyles } from "@material-ui/core"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
    root : {
        width : "100%" , 
        height : "20vh" , 
        display : "grid" , 
        position : "center" , 
        background : "white"
    }
}))

const NoItem = () => {

    const classes = useStyles()
  return (
    <Card className={clsx(classes.root)}>
        <Typography> موردی وجود ندارد</Typography>
    </Card>
  )
}

export default NoItem