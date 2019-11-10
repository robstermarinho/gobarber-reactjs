import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// If we are in development mode we need to monitor the saga otherwise null
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Store reaceive the reducers and the middlewares
const store = createStore(rootReducer, middlewares);

// Run the sagas
sagaMiddleware.run(rootSaga);

// expor the store
export default store;
