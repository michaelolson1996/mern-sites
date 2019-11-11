
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers';

export function initializeStore(initialState = {}) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};

