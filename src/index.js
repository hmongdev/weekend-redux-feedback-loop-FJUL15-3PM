import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//imports
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//reducers
const feeling = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return action.payload;
        default:
            return state;
    }
};

const understanding = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
};
const support = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return action.payload;
        default:
            return state;
    }
};
const comment = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.payload;
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comment,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
