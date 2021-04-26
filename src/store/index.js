import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduder from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduder, composeEnhancers(applyMiddleware(thunk)));
export default store;
