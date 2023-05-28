import { FavoritePopup } from './FavoritePopup'
import { useEffect, FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { IProduct } from '../../types/product.interface'
import { ICartItem } from '../../types/cart.interface'

export const FavoritePopupContainer: FC = () => {
	const { favoriteIsOpen, items } = useTypedSelector(state => state.favorite)
	const {
		toggleFavoriteOpen,
		toggleItemFavorite,
		toggleIsFavorite,
		toggleItemCart,
		getTotalPrice,
		toggleIsCart,
		toggleIsCartInFavorite,
	} = useActions()

	const closePopup = () => {
		toggleFavoriteOpen()
	}

	const toggleProductFavorite = (item: IProduct) => {
		toggleItemFavorite(item)
		toggleIsFavorite(item.id)
	}

	const toggleProductCart = (item: ICartItem) => {
		toggleItemCart(item)
		getTotalPrice()
		toggleIsCart(item.id)
		toggleIsCartInFavorite(item.id)
	}

	return favoriteIsOpen ? (
		<ToggleScroll
			items={items}
			closePopup={closePopup}
			toggleProductCart={toggleProductCart}
			toggleProductFavorite={toggleProductFavorite}
		/>
	) : null
}

interface IProps {
	items: IProduct[]
	closePopup: () => void
	toggleProductCart: (item: ICartItem) => void
	toggleProductFavorite: (item: IProduct) => void
}

const ToggleScroll: FC<IProps> = props => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	return <FavoritePopup {...props} />
}
