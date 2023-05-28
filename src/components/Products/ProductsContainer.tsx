import { Products } from './Products'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ICartItem } from '../../types/cart.interface'
import { IProduct } from '../../types/product.interface'
import { useActions } from '../../hooks/useActions'
import { FC } from 'react'

export const ProductsContainer: FC = () => {
	const {
		toggleItemCart,
		getTotalPrice,
		toggleIsCart,
		toggleItemFavorite,
		toggleIsFavorite,
		toggleIsCartInFavorite,
	} = useActions()

	const { items, searchItems, isSearchProducts } = useTypedSelector(
		state => state.products,
	)

	const toggleProductCart = (cartItem: ICartItem): void => {
		toggleItemCart(cartItem)
		getTotalPrice()
		toggleIsCart(cartItem.id)
		toggleIsCartInFavorite(cartItem.id)
	}
	const toggleProductFavorite = (item: IProduct): void => {
		toggleItemFavorite(item)
		toggleIsFavorite(item.id)
	}

	const allItems = isSearchProducts ? searchItems : items

	return (
		<Products
			toggleProductCart={toggleProductCart}
			toggleProductFavorite={toggleProductFavorite}
			items={allItems}
		/>
	)
}
