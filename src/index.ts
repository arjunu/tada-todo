"use strict";

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store.ts';
import App from './app.ts';

const store = configureStore();

const rootElement = document.getElementById('root');

render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,
    rootElement
);
