import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import 'babel-polyfill';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store2/store2';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));

if(module.hot){
  module.hot.accept();
}

registerServiceWorker();
