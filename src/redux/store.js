import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(thunk)
    // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer);

export default store;