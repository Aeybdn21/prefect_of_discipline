import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import rootReducer from './reducer';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, composedEnhancer);

export default store;