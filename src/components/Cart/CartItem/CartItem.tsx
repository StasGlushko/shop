import styles from './CartItem.module.scss'
import { IoCloseSharp } from 'react-icons/io5'
import { FC } from 'react'
import { ICartItem } from '../../../types/cart.interface'

interface IProps extends ICartItem {
	toggleProductCart: (item: ICartItem) => void
}

export const CartItem: FC<IProps> = ({
	image,
	id,
	name,
	price,
	count,
	isCart,
	isFavorite,
	toggleProductCart,
}) => {
	const item = {
		image,
		id,
		name,
		price,
		isCart,
		isFavorite,
		count,
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
			<div>Count: {count}</div>
			<div className={styles.close}>
				<IoCloseSharp onClick={() => toggleProductCart(item)} />
			</div>
		</div>
	)
}
