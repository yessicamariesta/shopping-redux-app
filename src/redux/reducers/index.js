import { combineReducers } from 'redux'
import { productReducter, selectedProductReducer } from './productReducer'

const reducers = combineReducers({
  allProducts: productReducter,
  product: selectedProductReducer,
})

export default reducers
