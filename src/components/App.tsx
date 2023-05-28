import { Footer } from './Footer/Footer'
import { Main } from './Main/Main'
import { CartContainer } from './Cart/CartContainer';
import { HeaderContainer } from './Header/HeaderContainer';
import { FavoritePopupContainer } from './FavoritePopup/FavoritePopupContainer';
import { FC } from 'react';

const App: FC = () => {
	return (
		<>
			<main>
				<HeaderContainer />
				<Main />
				<Footer />
			</main>
			<CartContainer />
			<FavoritePopupContainer />
		</>
	)
}


export default App
