import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../store/slices/cart.slice'
import { actions as favorite } from '../store/slices/favorite.slice'
import { actions as products } from '../store/slices/products.slice'

const rootActions = {
	...cart.actions,
	...favorite,
	...products,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
