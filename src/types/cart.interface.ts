import { IProduct } from './product.interface'

export interface ICartItem extends IProduct {
	count: number
}

export interface ICartInitialState {
	items: ICartItem[]
	cartIsOpen: boolean
	totalPrice: number
	count: number
	maxCount: number
}
