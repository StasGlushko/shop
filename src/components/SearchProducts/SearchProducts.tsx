import styles from './SearchProducts.module.scss'
import { AiOutlineArrowLeft, AiOutlineSearch } from 'react-icons/ai'
import { FC } from 'react'

interface IProps {
	productInput: string
	isSearchProducts: boolean
	searchText: string
	changeInput: (value: string) => void
	searchItems: () => void
	backToProducts: () => void
}

export const SearchProducts: FC<IProps> = ({
	productInput,
	isSearchProducts,
	searchText,
	changeInput,
	searchItems,
	backToProducts,
}) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		changeInput(e.target.value)

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchItems()
	}

	return (
		<div className={styles.searchWrapper}>
			<h3 className={styles.searchTitle}>
				{isSearchProducts && (
					<button onClick={backToProducts} className={styles.back}>
						<AiOutlineArrowLeft />
					</button>
				)}
				{isSearchProducts ? `Search: '${searchText}'` : 'Products'}
			</h3>
			<form onSubmit={onSubmit} className={styles.inputWrap}>
				<input
					type='text'
					onChange={onChange}
					value={productInput}
					placeholder='Search product...'
				/>
				<button className={styles.search} type='submit'>
					<AiOutlineSearch
					// className={styles.searchIcon}
					/>
				</button>
			</form>
		</div>
	)
}
