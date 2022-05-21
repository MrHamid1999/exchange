import {makeStyles} from "@mui/styles";
import clsx from "clsx"
import {Card , Box} from "@mui/material"
import Option from "./option";
const currencyList = ({items  , check}) => {
  return (
    <Card>
        {items.map(item => {
            return (
                <Box xs="12">
                    <Option props={item}/>
                </Box>
            )
        }) }
    </Card>
  )
}

export default currencyList