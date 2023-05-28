import styles from './FavoriteItem.module.scss'
import { IoCloseSharp } from 'react-icons/io5'
import { Button } from '../../../common/ui/CardButton/Button'
import { FC } from 'react'
import { IProduct } from '../../../types/product.interface'
import { ICartItem } from '../../../types/cart.interface'

interface IProps extends IProduct {
	toggleProductCart: (item: ICartItem) => void
	toggleProductFavorite: (item: IProduct) => void
}

export const FavoriteItem: FC<IProps> = ({
	image,
	id,
	name,
	price,
	isCart,
	isFavorite,
	toggleProductCart,
	toggleProductFavorite,
}) => {
	const item = {
		image,
		id,
		name,
		price,
		isCart,
		isFavorite,
		count: 1,
	}

	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<img src={image} alt='image' />
			</div>
			<div className={styles.info}>
				<h2>{name}</h2>
				<p>Price: {price}$</p>
			</div>
			<Button
				className={styles.button}
				onClick={() => toggleProductCart(item)}>
				{isCart ? 'Remove from cart' : 'Add To Cart'}
			</Button>
			<button className={styles.close}>
				<IoCloseSharp onClick={() => toggleProductFavorite(item)} />
			</button>
		</div>
	)
}
