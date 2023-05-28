import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartInitialState, ICartItem } from '../../types/cart.interface'

const initialState: ICartInitialState = {
	items: [],
	cartIsOpen: false,
	totalPrice: 0,
	count: 0,
	maxCount: 20,
}

export const cart = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCartOpen: state => {
			state.cartIsOpen = !state.cartIsOpen
		},
		toggleItemCart: (state, { payload }: PayloadAction<ICartItem>) => {
			const isExist =
				state.maxCount === state.items.length ||
				state.items.some(el => el.id === payload.id)

			if (isExist)
				state.items = state.items.filter(el => el.id !== payload.id)
			else state.items.push(payload)
			state.count = state.items.length
		},
		getTotalPrice: state => {
			state.totalPrice = state.items.reduce((acc, el) => {
				return (acc = acc + el.price)
			}, 0)
		},
	},
})

export const { actions, reducer } = cart
