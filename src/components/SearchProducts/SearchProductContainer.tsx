import { SearchProducts } from './SearchProducts'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { FC } from 'react';

export const SearchProductContainer: FC = () => {
	const { searchText, productInput, isSearchProducts } = useTypedSelector(
		state => state.products,
	)
	const { changeProductInput, searchProductItems, backToAllProducts } =
		useActions()

	const changeInput = (value: string) => {
		changeProductInput(value)
	}

	const searchItems = () => {
		searchProductItems()
	}

	const backToProducts = () => {
		backToAllProducts()
	}

	return (
		<SearchProducts
			changeInput={changeInput}
			searchItems={searchItems}
			backToProducts={backToProducts}
			productInput={productInput}
			isSearchProducts={isSearchProducts}
			searchText={searchText}
		/>
	)
}
