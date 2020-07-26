import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import rootReducer from '../reducers';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;

// // store.dispatch({ type: 'HELLO' }); // this is to test the sagas work
// store.dispatch({ type: 'LOGOUT' });
// store.dispatch({ type: 'LOGIN' });
// store.dispatch({ type: 'LOGOUT' });
