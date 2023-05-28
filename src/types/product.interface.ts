export interface IProduct {
	id: number
	name: string
	info?: string
	image: string
	price: number
	isFavorite: boolean
	isCart: boolean
}

export interface IProductInitialState {
	items: IProduct[]
	productInput: string
	searchText: string
	isSearchProducts: boolean
	searchItems: IProduct[]
}
