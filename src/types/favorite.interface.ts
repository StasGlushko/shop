import { IProduct } from './product.interface'

export interface IFavoriteInitialState {
	items: IProduct[]
	selectedFavorites: boolean
	favoriteIsOpen: boolean
	maxCount: number
}
