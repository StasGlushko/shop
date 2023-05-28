import { combineReducers } from '@reduxjs/toolkit'
import { reducer as products } from './slices/products.slice'
import { reducer as cart } from './slices/cart.slice'
import { reducer as favorite } from './slices/favorite.slice'

export const rootReducer = combineReducers({
	products,
	cart,
	favorite,
})
