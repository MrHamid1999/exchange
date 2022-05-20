import {makeStyles} from "@mui/styles";
import clsx from "clsx"
import {Grid } from "@mui/material"
import Option from "./option";
const currencyList = ({items  , check}) => {
  return (
    <Grid>
        {items.map(item => {
            return (
                <Grid xs="12">
                    <Option props={item}/>
                </Grid>
            )
        })}
    </Grid>
  )
}

export default currencyList