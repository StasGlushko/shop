import { Product } from './Product/Product'
import styles from './Products.module.scss'
import { IProduct } from '../../types/product.interface'
import { FC } from 'react'
import { ICartItem } from '../../types/cart.interface'

interface Props {
	toggleProductCart: (cartItem: ICartItem) => void
	toggleProductFavorite: (item: IProduct) => void
	items: IProduct[]
}

export const Products: FC<Props> = ({
	toggleProductCart,
	toggleProductFavorite,
	items,
}) => {
	return (
		<div className={styles.wrapper}>
			{items.map(el => (
				<Product
					{...el}
					key={el.id}
					toggleProductCart={toggleProductCart}
					toggleProductFavorite={toggleProductFavorite}
				/>
			))}
		</div>
	)
}
