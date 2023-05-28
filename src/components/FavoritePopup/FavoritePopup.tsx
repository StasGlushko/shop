import styles from './FavoritePopup.module.scss'
import { IoCloseSharp } from 'react-icons/io5'
import { FiHeart } from 'react-icons/fi'
import { FavoriteItem } from './FavoriteItem/FavoriteItem'
import { FC } from 'react'
import { IProduct } from '../../types/product.interface'
import { ICartItem } from '../../types/cart.interface'

interface IProps {
	items: IProduct[]
	closePopup: () => void
	toggleProductCart: (item: ICartItem) => void
	toggleProductFavorite: (item: IProduct) => void
}

export const FavoritePopup: FC<IProps> = ({
	items,
	closePopup,
	toggleProductFavorite,
	toggleProductCart,
}) => {
	return (
		<div className={styles.popupWrapper} onClick={closePopup}>
			<div className={styles.popup} onClick={e => e.stopPropagation()}>
				<div className={styles.head}>
					<div className={styles.favoriteTitle}>
						<FiHeart /> Favorite products
					</div>

					<button onClick={closePopup} className={styles.close}>
						<IoCloseSharp />
					</button>
				</div>
				<div className={styles.favoriteItems}>
					{items.length !== 0 ? (
						items.map(el => (
							<FavoriteItem
								{...el}
								key={el.id}
								toggleProductFavorite={toggleProductFavorite}
								toggleProductCart={toggleProductCart}
							/>
						))
					) : (
						<div className={styles.notItems}>
							You have not added the product to the favorite.
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
