import {configureStore} from '@reduxjs/toolkit'
import addToCartReducer from './addToCartSlice'

const store = configureStore({
    reducer: {
        cart: addToCartReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;