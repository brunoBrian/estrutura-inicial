import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const configureStore = () => {
  const environment = 'development' || 'production';
  const store = environment === 'production'
    ? 
    createStore(
      reducers, 
      applyMiddleware(thunk)
    )
    :
    createStore(
      reducers, composeWithDevTools(
        applyMiddleware(thunk, logger)
      )
    );

  return store;
};

export default configureStore;