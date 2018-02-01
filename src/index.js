import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import configureStore from 'config/store';
import Routes from 'config/routes';

import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

// Load SCSS
import './styles/index.scss';

es6Promise.polyfill();

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <Routes />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render app
render();

if (module.hot) {
  module.hot.accept('./config/routes', () => {
    const NewClient = require('./config/routes').default;

    render(NewClient);
  });
}
