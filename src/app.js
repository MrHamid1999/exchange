import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './components/home'
import Market from './components/market'
import CoinChart from "./components/coinChart.jsx"
import Header from './components/Header'
const App = () => {

   
  return <>
        <Header />
        <Routes>
            <Route path="/" exact element={<Home />} /> 
            <Route path="market" exact element={<Market />} />   
            <Route  path="market/:id" element={<CoinChart />}/>  
            <Route path="*"  element={<p>no match found</p>} />    
        </Routes>
        
     </>
}

export default App