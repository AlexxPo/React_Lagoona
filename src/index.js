import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import App from './containers/App';

import createStore from './store';
const store = createStore();


ReactDOM.render(
    <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    </React.StrictMode>,
  document.getElementById('root'));

