 import { createStore,applyMiddleware } from 'redux';
 import thunk from 'redux-thunk';
 import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';




const middlware = [thunk];


    const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlware)));


    export default store;