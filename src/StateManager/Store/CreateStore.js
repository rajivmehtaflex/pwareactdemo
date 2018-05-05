import { combineReducers, createStore, applyMiddleware } from 'redux'
import sampleReducer from '../Reducer/sampleReducer';
import ProductReducer from '../Reducer/ProductReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ sampleReducer, ProductReducer })

export function configureStore(initialState = {}) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}

const store = createStore(rootReducer)
export default store;