import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import reducers from './reducers';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducers, enhancer);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
      <Provider store={store}>
    <App />
      </Provider>,
  document.getElementById('root')
);


