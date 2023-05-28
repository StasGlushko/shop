import { useEffect, FC } from 'react'
import { Cart } from './Cart'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ICartItem } from '../../types/cart.interface'
import { useActions } from '../../hooks/useActions'

export const CartContainer: FC = () => {
	const { cartIsOpen, items, totalPrice } = useTypedSelector(
		state => state.cart,
	)
	const {
		toggleCartOpen,
		toggleItemCart,
		getTotalPrice,
		toggleIsCart,
		toggleIsCartInFavorite,
	} = useActions()

	const cartClose = (): void => {
		toggleCartOpen()
	}

	const toggleProductCart = (item: ICartItem): void => {
		toggleItemCart(item)
		getTotalPrice()
		toggleIsCart(item.id)
		toggleIsCartInFavorite(item.id)
	}

	const missingProducts = (): boolean => {
		return items.length === 0
	}

	return cartIsOpen ? (
		<ToggleScroll
			cartClose={cartClose}
			toggleProductCart={toggleProductCart}
			missingProducts={missingProducts}
			items={items}
			totalPrice={totalPrice}
		/>
	) : null //toggleProductCart={toggleProductCart}
}

interface IProps {
	cartClose: () => void
	toggleProductCart: (item: ICartItem) => void
	missingProducts: () => boolean
	items: ICartItem[]
	totalPrice: number
}

const ToggleScroll: FC<IProps> = props => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	return <Cart {...props} />
}
