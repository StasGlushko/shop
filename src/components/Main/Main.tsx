import { ProductsContainer } from '../Products/ProductsContainer';
import { SearchProductContainer } from '../SearchProducts/SearchProductContainer';
import { FC } from 'react';

export const Main: FC = () => {
	return (
		<section>
			<SearchProductContainer />
			<ProductsContainer />
		</section>
	)
}
