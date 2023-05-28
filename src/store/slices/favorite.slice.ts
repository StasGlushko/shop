import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFavoriteInitialState } from '../../types/favorite.interface'
import { IProduct } from '../../types/product.interface'

const initialState: IFavoriteInitialState = {
	items: [],
	favoriteIsOpen: false,
	maxCount: 10,
}

const favorite = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		toggleFavoriteOpen: state => {
			state.favoriteIsOpen = !state.favoriteIsOpen
		},
		toggleItemFavorite: (state, { payload }: PayloadAction<IProduct>) => {
			const isExist =
				state.maxCount === state.items.length ||
				state.items.some(el => el.id === payload.id)

			if (isExist)
				state.items = state.items.filter(el => el.id !== payload.id)
			else state.items.push(payload)
		},
		toggleIsCartInFavorite: (
			state,
			{ payload: id }: PayloadAction<number>,
		) => {
			state.items = state.items.map(el => {
				if (el.id === id) el.isCart = !el.isCart
				return el
			})
		},
	},
})

export const { actions, reducer } = favorite
