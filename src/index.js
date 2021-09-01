import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';

const main = document.querySelector('#root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    main
)





