import React from 'react'
import {Box} from "@mui/material"
import CurrencyList from './currencyList'
import { useSelector } from 'react-redux'
import NoItem from './noItem'
import { makeStyles } from '@material-ui/core'
import clsx from "clsx"
import MarketList from '../api/CurrencyList.api'

const useStyles = makeStyles(theme=>({
  container : {
   width : "100vw" , 
   height : "100vh" , 

  }
}))
const Market = () => {
  const marketList = MarketList()
  const coins = useSelector(state => state.currencyList) ;

  const classes = useStyles()
  
  return (
    <Box className={clsx(classes.container)}>
      
       {coins ? <CurrencyList props={coins}/> : <NoItem />}
    </Box>
  )
}

export default Market