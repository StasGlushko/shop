import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductInitialState } from '../../types/product.interface'

const initialState: IProductInitialState = {
	items: [
		{
			id: 0,
			name: 'nike jordan 2',
			info: 'Jordan Zoom Tenacity Men`s Running Shoe, By Nike Size - Nike Air Jordan Zoom',
			image: '/image/1.png',
			price: 250,
			isFavorite: false,
			isCart: false,
		},
		{
			id: 1,
			name: 'nike',
			info: 'Jordan Zoom Tenacity Men`s Running Shoe, By Nike Size - Nike Air Jordan Zoom',
			image: '/image/2.png',
			price: 450,
			isFavorite: false,
			isCart: false,
		},
		{
			id: 2,
			name: 'nike force',
			info: 'Jordan Zoom Tenacity Men`s Running Shoe, By Nike Size - Nike Air Jordan Zoom',
			image: '/image/3.png',
			price: 230,
			isFavorite: false,
			isCart: false,
		},
		{
			id: 3,
			name: 'nike ezy',
			info: 'Jordan Zoom Tenacity Men`s Running Shoe, By Nike Size - Nike Air Jordan Zoom',
			image: '/image/4.png',
			price: 200,
			isFavorite: false,
			isCart: false,
		},
		{
			id: 4,
			name: 'nike jordan',
			info: 'Jordan Zoom Tenacity Men`s Running Shoe, By Nike Size - Nike Air Jordan Zoom',
			image: '/image/5.png',
			price: 1100,
			isFavorite: false,
			isCart: false,
		},
		{
			id: 5,
			name: 'nike air force',
			info: 'Jordan Zoom Tenacity Men`s Running Shoe, By Nike Size - Nike Air Jordan Zoom',
			image: '/image/6.png',
			price: 500,
			isFavorite: false,
			isCart: false,
		},
	],
	productInput: '',
	searchText: '',
	isSearchProducts: false,
	searchItems: [],
}

export const products = createSlice({
	name: 'products',
	initialState,
	reducers: {
		toggleIsFavorite: (state, { payload }: PayloadAction<number>) => {
			if (state.isSearchProducts) {
				state.searchItems = state.searchItems.map(el => {
					if (el.id === payload) el.isFavorite = !el.isFavorite
					return el
				})
			}
			state.items = state.items.map(el => {
				if (el.id === payload) el.isFavorite = !el.isFavorite
				return el
			})
		},
		toggleIsCart: (state, { payload: id }: PayloadAction<number>) => {
			if (state.isSearchProducts) {
				state.searchItems = state.searchItems.map(el => {
					if (el.id === id) el.isCart = !el.isCart
					return el
				})
			}

			state.items = state.items.map(el => {
				if (el.id === id) el.isCart = !el.isCart
				return el
			})
		},
		changeProductInput: (state, { payload }: PayloadAction<string>) => {
			state.productInput = payload
		},
		searchProductItems: state => {
			if (state.productInput.length === 0) {
				state.searchText = ''
				state.isSearchProducts = false
				state.searchItems.splice(0, state.items.length)
				return
			}

			state.isSearchProducts = true
			state.searchItems.splice(0, state.items.length)
			state.items.map(el => {
				if (
					el.name.toLowerCase().includes(state.productInput.toLowerCase())
				) {
					state.searchItems.push(el)
				}
			})
			state.searchText = state.productInput
			state.productInput = ''
		},
		backToAllProducts: state => {
			state.productInput = ''
			state.searchText = ''
			state.isSearchProducts = false
			state.searchItems.splice(0, state.items.length)
		},
	},
})

export const { actions, reducer } = products
