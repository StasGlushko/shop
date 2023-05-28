import styles from './Product.module.scss'
import { HiOutlineHeart } from 'react-icons/hi'
import { IProduct } from '../../../types/product.interface'
import { FC } from 'react'
import { Button } from './../../../common/ui/CardButton/Button'
import { ICartItem } from '../../../types/cart.interface'

interface IProps extends IProduct {
	toggleProductCart: (cartItem: ICartItem) => void
	toggleProductFavorite: (item: IProduct) => void
}

export const Product: FC<IProps> = ({
	id,
	name,
	image,
	price,
	isFavorite,
	isCart,
	toggleProductCart,
	toggleProductFavorite,
}) => {
	const item = {
		id,
		name,
		price,
		image,
		isFavorite,
		isCart,
	}
	const itemCart = {
		count: 1,
		...item,
	}

	return (
		<div className={styles.cardProduct}>
			<div className={styles.img}>
				<img src={image} alt='img' />
			</div>
			<div className={styles.data}>
				<h3 className={styles.title}>{name}</h3>
				<span className={styles.price}>{price}$</span>
			</div>
			<div className={styles.bottom}>
				<Button
					className={styles.button}
					onClick={() => toggleProductCart(itemCart)}>
					{isCart ? 'Remove from cart' : 'Add To Cart'}
				</Button>
				<HiOutlineHeart
					className={styles.heart + ' ' + (isFavorite ? styles.added : '')}
					onClick={() => toggleProductFavorite(item)}
				/>
			</div>
		</div>
	)
}
