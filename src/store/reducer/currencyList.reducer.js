import { GET_DATA } from "../action/action";


const initalState = [{
    code: "BTC_IRT",
currency1:{
code: "BTC",
    color: "f7931a",
    decimal: 2,
    decimal_amount: 8,
    decimal_irt: 0,
    for_test: false,
    high_risk: false,
    id: 1,
    image: "https://cdn.bitpin.ir/media/market/currency/1628415570.svg",
    show_high_risk: false,
    tags: [],
    title: "Bitcoin",
    title_fa: "بیت کوین",
    tradable: true,
    withdraw_commission: "0.000550000000000000",
} ,
currency2:{
    code: "IRT",
    color: "00fd22",
    decimal: 0,
    decimal_amount: 0,
    decimal_irt: 1,
    for_test: false,
    high_risk: false,
    id: 2,
    image: "https://cdn.bitpin.ir/media/market/currency/1610698086.png",
    show_high_risk: false,
    tags: [],
    title: "Toman",
    title_fa: "تومان",
    tradable: true,
    withdraw_commission: "0.000200000000000000",
},
for_test: false,
id: 1,
internal_price_info:{
    amount: null,
    change: 0.2399,
    created_at: 1653581127.560974,
    max: "917161634",
    mean: null,
    min: "879020110",
    price: "908785591",
    time: null,
    value: null,
},
order_book_info:{
    amount: "11.82409416",
    change: 0.0023,
    created_at: null,
    max: "917161634",
    mean: "903280597",
    min: "879020110",
    price: "908785591",
    time: "2022-05-26T16:05:27.000Z",
    value: "10695542009",
},
otc_buy_percent: "0.00800",
otc_market: false,
otc_max_buy_amount: "0.040000000000000000",
otc_max_sell_amount: "0.040000000,000000000",
otc_sell_percent: "0.,00800",
price: "909740567",
price_info:{
amount: null,
change: 0.5,
created_at: 1653581114.152,
max: "918655872",
mean: null,
min: "872390429",
price: "909740567",
time: null,
value: null,
},
title: "Bitcoin/Toman",
title_fa: "بیت کوین/تومان",
tradable: true,
trading_view_source: "BINANCE",
trading_view_symbol: "BTCUSDT",
}]

const currencyListReducer = (state = [] , action)=> {
    switch (action.type) {
        case GET_DATA:
            return [...action.payload]
    
        default:
            return state
            
    }
}

export default currencyListReducer