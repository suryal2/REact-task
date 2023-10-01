import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice';
 import CardSlice from './CardSlice'
import Totalprice from './Totalprice'
const store =  configureStore({
    reducer: {
        counter: counterSlice,
        cardcount : CardSlice,
        counterY:Totalprice,
    },
});

export default store;