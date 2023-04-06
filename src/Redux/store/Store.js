import { createStore, applyMiddleware } from 'redux'
import { MoviesReducer} from '../Reducer/MoviesReducer';
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk  from 'redux-thunk'
// Create Store
export const store = createStore(MoviesReducer, applyMiddleware(thunk),)