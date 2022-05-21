import currencyListReducer from "./currencyList.reducer";
import chartReducer from "./charts.reducer";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer : {
        currencyList : currencyListReducer , 
        chart : chartReducer
    } ,
    devtool :window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store