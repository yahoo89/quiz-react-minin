import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './store/reducers/rootReducers'
import Immutable from 'immutable' // https://facebook.github.io/immutable-js/
import thunk from 'redux-thunk';


const composeEnhancers =
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: {
        immutable: Immutable,
      },
    })
    : compose;

const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  app
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
