import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './components/home'
import Item from './components/item'
const App = () => {

   
  return <>
        <Routes>
            <Route path="/" exact element={<Home />} /> 
            <Route path="item" exact element={<Item />} /> 
            <Route path="*" exact element={<p>no match found</p>} />    
        </Routes>
     </>
}

export default App