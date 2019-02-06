import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from "redux-logger";
import rootReducer from './reducers/index';
import apiMiddleware from './middleware/api';


function configureStore() {
  const middleware = applyMiddleware(logger, apiMiddleware);
  const enhancer = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  const store = createStore(
    rootReducer, 
    enhancer
  );

  persistStore(store);

  return store;
}

export default configureStore();