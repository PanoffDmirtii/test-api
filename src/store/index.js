import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coinReducer from './reducers/coin'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  coin: coinReducer
})

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

export default store;