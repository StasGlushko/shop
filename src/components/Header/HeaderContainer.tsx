import { Header } from './Header'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { FC } from 'react';

export const HeaderContainer: FC = () => {
	const { count } = useTypedSelector(state => state.cart)
	const { toggleCartOpen, toggleFavoriteOpen } = useActions()


	const cartOpen = () => {
		toggleCartOpen()
	}

	const favoriteOpen = () => {
		toggleFavoriteOpen()
	}

	return (
		<Header
			countCart={count}
			cartOpen={cartOpen}
			favoriteOpen={favoriteOpen}
		/>
	)
}
