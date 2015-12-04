// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
//import { devTools, persistState } from 'redux-devtools';

import { rootReducer } from './reducers';


const finalCreateStore = compose(
    // Enables your middleware:
    //applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
    // Provides support for DevTools:
    //devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    //persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore () {
    return finalCreateStore(rootReducer);
}

export default function configureStore (initialState) {
    return createStore(rootReducer, initialState);
}