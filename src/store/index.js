import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

// If we are in development mode we need to monitor the saga otherwise null
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

// Create saga middleware
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

// Store reaceive the reducers and the middlewares
const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

// Run the sagas
sagaMiddleware.run(rootSaga);

// expor the store
export { store, persistor };
