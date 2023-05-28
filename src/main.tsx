import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App'
import './styles/index.scss'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>,
)
