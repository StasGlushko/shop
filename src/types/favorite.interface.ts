import { IProduct } from './product.interface'

export interface IFavoriteInitialState {
	items: IProduct[]
	favoriteIsOpen: boolean
	maxCount: number
}
