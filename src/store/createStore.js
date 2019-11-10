import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  // Register the redux enhancer with the middlewares in development mode
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
