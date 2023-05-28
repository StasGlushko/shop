import styles from './Cart.module.scss'
import { FiShoppingCart } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
import { CartItem } from './CartItem/CartItem'
import { Button } from '../../common/ui/CardButton/Button'
import { FC } from 'react'
import { ICartItem } from '../../types/cart.interface'

interface IProps {
	cartClose: () => void
	missingProducts: () => boolean
	toggleProductCart: (item: ICartItem) => void
	items: ICartItem[]
	totalPrice: number
}

export const Cart: FC<IProps> = ({
	cartClose,
	missingProducts,
	toggleProductCart,
	items,
	totalPrice,
}) => {
	return (
		<div className={styles.cartWrap} onClick={cartClose}>
			<div className={styles.cart} onClick={e => e.stopPropagation()}>
				<div className={styles.head}>
					<div className={styles.cartTitle}>
						<FiShoppingCart /> Cart
					</div>
					<div onClick={cartClose} className={styles.close}>
						<IoCloseSharp />
					</div>
				</div>
				<div className={styles.items}>
					{items.length !== 0 ? (
						items.map(el => (
							<CartItem
								{...el}
								key={el.id}
								toggleProductCart={toggleProductCart}
							/>
						))
					) : (
						<div className={styles.notItems}>
							You have not added the product to the curt.
						</div>
					)}
				</div>
				<div className={styles.bottom}>
					<div>Total price: {totalPrice}$</div>

					<Button
						onClick={() => console.log('click')}
						disabled={missingProducts()}>
						Buy
					</Button>
				</div>
			</div>
		</div>
	)
}
